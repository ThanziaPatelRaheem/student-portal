# Dockerized MERN Student Portal

A Dockerized version of the Student Portal MERN application built to explore containerization, Docker Compose, and deployment workflows.

This branch focuses on understanding how a full-stack MERN application can be packaged and run using containers while preparing for future CI/CD and cloud deployment implementations.

---

## 🎯 Project Purpose

The primary goal of this branch is to learn and practice:

- Docker Images
- Docker Containers
- Docker Networks
- Docker Volumes
- Dockerfiles
- Docker Compose
- Multi-Container Applications
- CI/CD Foundations
- Cloud Deployment Workflows

This branch is separate from the main application branch and is intended specifically for Docker and DevOps-related experimentation and learning.

---

## 🏗 Architecture

```text
Browser
   ↓
Frontend Container
   ↓
Backend Container
   ↓
MongoDB Container
   ↓
Docker Volume
```

---

## 🐳 Docker Concepts Implemented

- Custom Dockerfiles
- Docker Images
- Docker Containers
- Custom Docker Network
- Persistent Docker Volume
- Docker Compose
- Multi-Container Communication

---

## 📦 Containers

```text
frontend
backend
mongo-db
```

---

## 🌐 Network

```text
student-network
```

Used for communication between:

- Frontend Container
- Backend Container
- MongoDB Container

---

## 💾 Volume

```text
mongo-data
```

Provides persistent storage for MongoDB data.

---

## 🚀 Running with Docker Compose

```bash
docker compose up --build
```

---

## 🛑 Stop Containers

```bash
docker compose down
```

---

## 🔍 Verify Resources

### Containers

```bash
docker ps
```

### Volumes

```bash
docker volume ls
```

### Networks

```bash
docker network ls
```

---

## 📚 Learning Outcomes

Through this branch I explored:

- Containerizing React Applications
- Containerizing Express APIs
- Running MongoDB in Containers
- Docker Networking
- Docker Volumes
- Docker Compose
- Multi-Service Application Management

---

## 🔮 Next Steps

- GitHub Actions
- CI/CD Pipelines
- AWS EC2 Deployment
- Docker-based Cloud Deployments
- Reverse Proxy Configuration
- Production Docker Workflows

```

```
