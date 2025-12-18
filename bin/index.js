#!/usr/bin/env node

import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";
import chalk from "chalk";
import { Command } from "commander";
import { execSync } from "child_process";
import { select, input } from "@inquirer/prompts";

// ESM dirname fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const program = new Command();

program
  .name("create-express-backend-app")
  .description("Create a scalable Express backend boilerplate")
  .argument("<project-name>", "project name or '.' for current directory")
  .action(async (projectName) => {
    await createProject(projectName);
  });

program.parse(process.argv);

async function createProject(projectName) {
  const currentDir = process.cwd();
  const isCurrentDir = projectName === ".";
  const targetPath = isCurrentDir
    ? currentDir
    : path.join(currentDir, projectName);

  // ─────────────────────────────────────────────
  // PROMPTS (modern @inquirer/prompts)
  // ─────────────────────────────────────────────
  const language = await select({
    message: "Select language:",
    choices: [
      { name: "TypeScript (recommended)", value: "ts" },
      { name: "JavaScript", value: "js" },
    ],
  });

  const dbName = await input({
    message: "Enter MongoDB database name:",
    default: "express_app",
  });

  const port = await input({
    message: "Enter server port:",
    default: "8080",
    validate: (value) => (/^\d+$/.test(value) ? true : "Port must be a number"),
  });

  const templatePath = path.join(__dirname, "../template", language);

  // ─────────────────────────────────────────────
  // SAFETY CHECKS
  // ─────────────────────────────────────────────
  if (!isCurrentDir && fs.existsSync(targetPath)) {
    console.log(chalk.red(`❌ Folder "${projectName}" already exists`));
    process.exit(1);
  }

  // Prevent copying template into itself
  if (targetPath.startsWith(templatePath)) {
    console.log(
      chalk.red(
        "❌ Cannot create project inside the template directory.\n" +
          "👉 Run this command from outside the CLI project folder."
      )
    );
    process.exit(1);
  }

  if (isCurrentDir) {
    console.log(
      chalk.yellow("⚠️  Creating project in the current directory...")
    );
  }

  // ─────────────────────────────────────────────
  // COPY TEMPLATE
  // ─────────────────────────────────────────────
  console.log(chalk.blue("📁 Creating project..."));
  fs.copySync(templatePath, targetPath);

  // ─────────────────────────────────────────────
  // UPDATE package.json
  // ─────────────────────────────────────────────
  const pkgPath = path.join(targetPath, "package.json");
  if (fs.existsSync(pkgPath)) {
    const pkg = fs.readJsonSync(pkgPath);
    pkg.name = isCurrentDir ? path.basename(targetPath) : projectName;
    fs.writeJsonSync(pkgPath, pkg, { spaces: 2 });
  }

  // ─────────────────────────────────────────────
  // CREATE .env FILE
  // ─────────────────────────────────────────────
  const envContent = `PORT=${port}
MONGO_URI=mongodb://127.0.0.1:27017/${dbName}
`;

  fs.writeFileSync(path.join(targetPath, ".env"), envContent);

  // ─────────────────────────────────────────────
  // INSTALL DEPENDENCIES
  // ─────────────────────────────────────────────
  console.log(chalk.yellow("📦 Installing dependencies..."));
  execSync("npm install", {
    cwd: targetPath,
    stdio: "inherit",
  });

  // ─────────────────────────────────────────────
  // DONE
  // ─────────────────────────────────────────────
  console.log(chalk.green("\n✅ Project created successfully!\n"));
  console.log(chalk.cyan("Next steps:"));
  if (!isCurrentDir) {
    console.log(`  cd ${projectName}`);
  }
  console.log("  npm run dev\n");
}
