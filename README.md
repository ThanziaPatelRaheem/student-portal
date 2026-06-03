# Student Portal MERN Application

A simple full-stack Student Management application built using the MERN stack (MongoDB, Express.js, React, and Node.js).

The application allows users to register, authenticate using JWT, and perform CRUD operations on student records through a secure REST API.

---

## 🎯 Project Purpose

This project is a simple MERN application that serves as a foundation for learning Docker, Docker Compose, CI/CD, GitHub Actions, and cloud deployment concepts.

A Dockerized version of this application is available in the **docker-setup** branch.

---

## ✨ Features

### Authentication

- User Registration
- User Login
- Password Hashing using bcrypt
- JWT Authentication
- Protected Routes

### Student Management

- Add Student
- View Students
- Update Student Details
- Delete Students

---

## 🛠 Tech Stack

### Frontend

- React
- React Router DOM
- Vite

### Backend

- Node.js
- Express.js

### Database

- MongoDB
- Mongoose

### Authentication

- JSON Web Token (JWT)
- bcrypt

---

## 📁 Project Structure

```text
student-portal-v1
│
├── client
│   ├── src
│   ├── public
│   └── package.json
│
├── server
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── config
│   └── package.json
│
└── README.md
```

---

## 🔗 API Endpoints

### Authentication

#### Register User

```http
POST /api/v1/auth/register
```

#### Login User

```http
POST /api/v1/auth/login
```

### Students

#### Get All Students

```http
GET /api/v1/students
```

#### Add Student

```http
POST /api/v1/students
```

#### Update Student

```http
PATCH /api/v1/students/:id
```

#### Delete Student

```http
DELETE /api/v1/students/:id
```

---

## ⚙️ Environment Variables

Create a `.env` file inside the `server` folder:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
JWT_EXPIRES=7d
```

---

## 🚀 Installation

### Clone Repository

```bash
git clone <repository-url>
cd student-portal-v1
```

### Backend Setup

```bash
cd server
npm install
npm run dev
```

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

## 👨‍💻 Author

Built using React, Node.js, Express.js, and MongoDB as a full-stack portfolio project.
