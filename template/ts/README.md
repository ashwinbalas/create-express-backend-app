# Express TypeScript Backend

This project was generated using `create-express-backend-app`. It's a scalable, production-ready backend boilerplate built with Express.js, TypeScript, and MongoDB.

## 🚀 Key Features

- **TypeScript**: Fully typed for better developer experience and code quality.
- **Modular Architecture**: scaling with your application (Controller-Service-Model pattern).
- **MongoDB & Mongoose**: Pre-configured database connection.
- **Environment Config**: Native `.env` support.
- **Safety**: Error handling and middleware included.

## 🛠️ Getting Started

### 1. Install Dependencies

Install the project dependencies using npm:

```bash
npm install
```

### 2. Environment Setup

Create a `.env` file in the root directory and configure your variables (or rename `.env.example`):

```env
PORT=8080
MONGO_URI=mongodb://localhost:27017/express_app
```

### 3. Run the Server

**Development Mode** (with hot-reload):

```bash
npm run dev
```

**Production Build**:
First build the TypeScript code, then start the server:

```bash
npm run build
npm start
```

## 📂 Project Structure

```
src/
├── config/             # Database & environment configuration
├── constants/          # Application constants
├── middlewares/        # Custom Express middlewares
├── modules/            # Domain-specific modules (User, etc.)
│   └── user/
│       ├── user.controller.ts
│       ├── user.interface.ts
│       ├── user.model.ts
│       ├── user.routes.ts
│       └── user.service.ts
├── routes/             # Main application routes
├── utils/              # Utility functions
├── app.ts              # Express App definition
└── server.ts           # Entry point
```

## 📜 Scripts

- `npm run dev`: Runs the app in development mode using `nodemon` or `ts-node-dev`.
- `npm run build`: Compiles TypeScript to JavaScript (dist folder).
- `npm start`: Runs the compiled app from `dist/server.js`.
- `npm run lint`: Checks for linting errors.

## 🤝 Contributing

Feel free to customize this project further to suit your needs!
