# 🎛️ RFC Skillhub Admin Panel

This is the **admin interface** of the RFC Skillhub platform — a training tracking web application developed using a DevOps approach. The admin dashboard enables RFC managers to oversee employee development by managing training courses and certification sessions in real time.

## 🌐 About the Project

RFC Skillhub is a scalable, event-driven, microservice-based web application designed to help RFC teams manage and monitor their internal training programs efficiently. This repository contains the React-based UI dedicated to platform administrators.

## ✨ Features

- Manage training courses (Add / Delete)
- Manage certification sessions (Add / Delete)
- View all available learning modules by department
- Connect to a secure backend via API Gateway and JWT Auth
- Deployed on Azure Kubernetes Service (AKS)

## 🛠️ Tech Stack

- **Frontend Framework:** React.js
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Communication:** RESTful API via Axios
- **Deployment:** Azure Kubernetes Service (AKS)
- **CI/CD:** GitHub Actions
- **Containerization:** Docker
- **Routing & Security:** NGINX, JWT

## 🚀 Deployment

This project is containerized using Docker and deployed via GitHub Actions to Azure Kubernetes Service. The pipeline:
1. Builds Docker image from React app
2. Pushes image to Azure Container Registry (ACR)
3. Deploys image to AKS using manifest files via `kubectl`



