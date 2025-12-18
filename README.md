# create-express-backend-app

🚀 **A powerful CLI to bootstrap a scalable, production-ready Express.js backend with MongoDB.**

![License](https://img.shields.io/npm/l/create-express-backend-app)
![Version](https://img.shields.io/npm/v/create-express-backend-app)

## Overview

`create-express-backend-app` is a command-line interface tool designed to help developers quickly set up a robust backend architecture. It provides a modular, organized structure with pre-configured MongoDB connectivity and a basic User CRUD module to get you started immediately.

## Features

- 🏗 **Modular Architecture**: Built with scalability in mind. Code is organized by modules (Controller, Service, Model, Routes).
- ⚡ **Express.js Framework**: Fast, unopinionated, minimalist web framework for Node.js.
- 🍃 **MongoDB & Mongoose**: Pre-configured database connection and object modeling.
- 👤 **User CRUD**: Comes with a fully functional User module.
- 🛠 **Environment Configuration**: Ready-to-use `.env` support.
- 📦 **Auto Dependency Install**: The CLI automatically installs dependencies for you.

## Installation

You can use the tool directly via `npx` (recommended) or install it globally.

### Using Standard NPX (Recommended)

```bash
npx create-express-backend-app <your-project-name>
```

### Global Installation

```bash
npm install -g create-express-backend-app
```

Then run:

```bash
create-express-backend-app my-new-app
```

## Usage

1.  Open your terminal.
2.  Run the command with your desired project name:

    ```bash
    npx create-express-backend-app my-awesome-backend
    ```

3.  The CLI will:

    - Create a new directory named `my-awesome-backend`.
    - Clone the boilerplate structure.
    - Install all necessary dependencies (`express`, `mongoose`, `dotenv`, etc.).

4.  Navigate into your project:

    ```bash
    cd my-awesome-backend
    ```

5.  Start the development server:

    ```bash
    npm run dev
    ```

## Project Structure

The generated project follows a scalable, modular pattern:

```
my-awesome-backend/
├── src/
│   ├── config/             # Database key configurations
│   ├── constants/          # Application constants
│   ├── middlewares/        # Custom middlewares
│   ├── modules/            # Domain-specific modules
│   │   └── user/           # Example User module
│   │       ├── user.controller.js
│   │       ├── user.model.js
│   │       ├── user.routes.js
│   │       └── user.service.js
│   ├── routes/             # Main route aggregators
│   ├── utils/              # Utility functions
│   ├── app.js              # Express app setup
│   └── server.js           # Server entry point
├── .env.example            # Environment variable examples
├── package.json
└── README.md
```

## Getting Started with the Generated Code

1.  **Environment Setup**: Rename `.env.example` to `.env` and configure your MongoDB URI.

    ```env
    PORT=3000
    MONGO_URI=mongodb://localhost:27017/myapp
    ```

2.  **Run Server**:

    ```bash
    npm run dev
    ```

3.  **Test API**:
    The User module endpoints will be available at `/api/users` (check `src/routes/index.js` for the exact path prefix).

## Contributing

Contributions are welcome! If you have suggestions or want to add features to the boilerplate:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/improvement`).
3.  Commit your changes.
4.  Push to the branch.
5.  Open a Pull Request.

## Author

**Ashwin Balas**

## License

This project is licensed under the ISC License.
