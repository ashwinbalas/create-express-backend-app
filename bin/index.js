#!/usr/bin/env node

import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";
import chalk from "chalk";
import { Command } from "commander";
import { execSync } from "child_process";

// Required for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const program = new Command();

program
  .name("create-express-backend")
  .description("Create a scalable Express backend boilerplate")
  .argument("<project-name>", "name of the project")
  .action((projectName) => {
    createProject(projectName);
  });

program.parse(process.argv);

function createProject(projectName) {
  const targetPath = path.join(process.cwd(), projectName);
  const templatePath = path.join(__dirname, "../template");

  // 1️⃣ Check if folder already exists
  if (fs.existsSync(targetPath)) {
    console.log(chalk.red(`❌ Folder "${projectName}" already exists`));
    process.exit(1);
  }

  // 2️⃣ Copy template
  console.log(chalk.blue("📁 Creating project..."));
  fs.copySync(templatePath, targetPath);

  // 3️⃣ Update package.json name
  const pkgPath = path.join(targetPath, "package.json");
  if (fs.existsSync(pkgPath)) {
    const pkg = fs.readJsonSync(pkgPath);
    pkg.name = projectName;
    fs.writeJsonSync(pkgPath, pkg, { spaces: 2 });
  }

  // 4️⃣ Install dependencies
  console.log(chalk.yellow("📦 Installing dependencies..."));
  execSync("npm install", {
    cwd: targetPath,
    stdio: "inherit",
  });

  // 5️⃣ Done 🎉
  console.log(chalk.green("\n✅ Project created successfully!"));
  console.log(chalk.cyan(`\nNext steps:`));
  console.log(`  cd ${projectName}`);
  console.log(`  npm run dev`);
}
