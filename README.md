# 🎓 MyUni - University Management System

<div align="center">
  <img src="./client/public/logo.svg" alt="MyUni Logo" width="100" height="100" />

  <h3><strong>A comprehensive university management system built with React + Vite</strong></h3>

  <p>
    <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-18-61dafb?style=flat-square&logo=react" /></a>
    <a href="https://vitejs.dev/"><img src="https://img.shields.io/badge/Vite-5.0-646CFF?style=flat-square&logo=vite" /></a>
    <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript" /></a>
    <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/TailwindCSS-4.0-38B2AC?style=flat-square&logo=tailwind-css" /></a>
    <a href="https://ui.shadcn.com/"><img src="https://img.shields.io/badge/shadcn%2Fui-Latest-000000?style=flat-square" /></a>
  </p>
</div>

---

## 📖 About MyUni

**MyUni** is a modern, feature-rich university management system designed for students and administrators. Built with the latest frontend technologies, it offers intuitive dashboards, real-time updates, and seamless navigation across multiple university modules.

---

## ✨ Features

- 🎯 **Role-Based Access** — Separate dashboards for Students & Admins
- 📅 **Course Scheduling** — Semester plans, subject lists, timings
- 📢 **Announcements System** — Centralized real-time updates
- 🍽️ **Campus Services** — Library, restaurant, map, and utilities
- 👥 **Faculty Directory** — Staff and department listings
- 🌙 **Dark Mode** — Theme toggle using `shadcn/ui`
- 📱 **Fully Responsive** — Tailwind-powered mobile-first design

---

## 🚀 Getting Started

### 📦 Prerequisites

- Node.js v18+
- npm or pnpm or yarn

### 🛠️ Setup

```bash
# 1. Clone the repo
git clone https://github.com/your-username/myuni.git
cd myuni

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Visit: [http://localhost:5173](http://localhost:5173)

---

## 🧪 Default Credentials (For Testing, under development)

### 👨‍🎓 Student

- Email: `student@myuni.edu`
- Password: `student123`

### 👨‍💼 Admin

- Email: `admin@myuni.edu`
- Password: `admin123`

---

## 📁 Project Structure (React + Vite)

```txt
myuni/
├── public/                   # Static assets
├── src/
│   ├── assets/              # Logos, images, fonts
│   ├── components/          # Reusable components (shadcn/ui + custom)
│   ├── layouts/             # Sidebar layout, theme provider, etc.
│   ├── pages/               # Page components (Dashboard, Services, etc.)
│   ├── routes/              # React Router routes
│   ├── context/             # Auth, Theme, and other contexts
│   ├── hooks/               # Custom hooks
│   ├── lib/                 # Utility functions
│   ├── App.tsx             # Main entry point
│   └── main.tsx            # Vite bootstrap
├── tailwind.config.ts       # Tailwind config
├── postcss.config.js        # PostCSS config
├── tsconfig.json            # TypeScript config
├── index.html               # HTML entry
└── vite.config.ts           # Vite config
```

---

## 💻 Tech Stack

| Tool                | Description                         |
| ------------------- | ----------------------------------- |
| **React 18**        | UI Library                          |
| **Vite 5+**         | Fast build tool and dev server      |
| **TypeScript**      | Static typing                       |
| **Tailwind CSS v4** | Utility-first CSS framework         |
| **shadcn/ui**       | Beautiful component library         |
| **Lucide**          | Icon set used in UI                 |
| **React Router**    | Routing between student/admin pages |

---

## 🔐 Authentication

- Basic login authentication (username/password)
- Role-based access (admin, student)
- Protected routes (via context or middleware)

---

## 🌙 Theme & Styling

- Theme toggle (light/dark) via `shadcn/ui`
- Typography: `Inter`, imported via Google Fonts
- Fully responsive using Tailwind's mobile-first utilities

---

## 🧑‍💻 Contributing

```bash
# Create a new feature branch
git checkout -b feature/awesome-feature

# Make your changes, then push:
git push origin feature/awesome-feature
```

Then open a **Pull Request**!

### Guidelines

- Type-safe code (TypeScript)
- Use Tailwind for styling
- Follow component conventions (`shadcn/ui`)
- Keep code readable and modular

---

## 📄 License

This project is licensed under the **MIT License**. See [LICENSE](./LICENSE) for more info.

---

<div align="center">
  <strong>Made with ❤️ </strong><br/>
  © 2025 MyUni. All rights reserved.
</div>
