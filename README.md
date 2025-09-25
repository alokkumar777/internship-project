# Fiverr Clone

A MERN stack project inspired by Fiverr, one of the largest outsourcing platforms.

## Table of Contents

- [Tech Stack](#tech-stack)
- [Features](#features)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Tech Stack

**Frontend:**  
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Rest API](https://img.shields.io/badge/Rest_API-02303A?style=for-the-badge&logo=react-router&logoColor=white)

**Backend:**  
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

**Deployment:**  
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)
![Render](https://img.shields.io/badge/Render-430098?style=for-the-badge&logo=heroku&logoColor=white)

---

## Features

### Seller
- Chat with buyers
- Create, manage, and delete gigs
- Review system for gigs (comments & stars)

### Buyer/User
- Chat with sellers
- Browse, search, filter, and sort gigs
- Order gigs securely (Stripe integration)
- Manage orders and leave reviews

### General
- Registration & authentication (JWT)
- Image uploads via Cloudinary
- One-to-one messaging

---

## Screenshots

![cover](https://i.ibb.co/16SWfbg/Fiverr-Gif.gif)

<details>
  <summary>Click to expand screenshots</summary>
  <img src="https://i.ibb.co/4Z9CMpn/1.png"  alt="Home" />
  <img src="https://i.ibb.co/QQQgWTc/2.png"  alt="Slider" />
  <img src="https://i.ibb.co/YNyrDZb/3.png"  alt="Menu" />
  <img src="https://i.ibb.co/BGw32m3/4.png"  alt="All Products" />
  <!-- Add/remove images as needed -->
</details>

---

## Getting Started

### Prerequisites

- Node.js & npm
- MongoDB

### Installation

```bash
git clone https://github.com/alokkumar777/internship-project.git
cd internship-project

# Install frontend dependencies
cd client
npm install

# Install backend dependencies
cd ../server
npm install