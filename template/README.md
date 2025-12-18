# Express Backend Application

This is a scalable, production-ready backend boilerplate built with Express.js and MongoDB. It follows a modular architecture to separate concerns and make the codebase easy to maintain and expand.

## 🚀 Features

- **Modular Architecture**: Features are organized into modules (Controller, Service, Model, Routes).
- **MongoDB & Mongoose**: Object modeling and database connection ready to go.
- **Error Handling**: Centralized error handling mechanism.
- **Environment Variables**: Managed using `dotenv`.
- **Validation**: (Add if applicable, though currently minimal).

## 🛠️ Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [MongoDB](https://www.mongodb.com/) (Local or Atlas)

### Installation

1.  **Install dependencies**

    ```bash
    npm install
    ```

2.  **Configure Environment**

    - Copy `.env.example` to `.env`
    - Update the variables (Port, MongoDB URI)

    ```bash
    cp .env.example .env
    ```

3.  **Run Development Server**
    ```bash
    npm run dev
    ```
    The server will start on `http://localhost:3000` (or your defined PORT).

## 📂 Project Structure

```bash
src/
├── config/             # Database configurations
├── constants/          # App-wide constants
├── middlewares/        # Global middlewares (ErrorHandler, etc.)
├── modules/            # Domain specific modules
│   └── user/           # User module
│       ├── user.controller.js  # Request handlers
│       ├── user.service.js     # Business logic
│       ├── user.model.js       # Database schema
│       └── user.routes.js      # Route definitions
├── routes/             # Main API route aggregator
├── utils/              # Helper functions
├── app.js              # App configuration
└── server.js           # Server entry point
```

## 📡 API Endpoints

### Health Check

- `GET /` - Check if the API is running.

### User Module

Base Path: `/api/users`

| Method     | Endpoint | Description             |
| :--------- | :------- | :---------------------- |
| **POST**   | `/`      | Create a new user       |
| **GET**    | `/`      | Get all users           |
| **GET**    | `/:id`   | Get specific user by ID |
| **PUT**    | `/:id`   | Update a user           |
| **DELETE** | `/:id`   | Delete a user           |

## 📜 Scripts

- `npm run dev`: generic development server using `nodemon`.
- `npm start`: Production server using `node`.

## 🤝 Contributing

Feel free to submit issues and enhancement requests.

## 📄 License

This project is open-sourced software licensed under the **ISC License**.
