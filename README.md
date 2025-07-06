
# 📚 Library Management System

The **Library Management System** is a full-stack web application that allows users to browse available books, borrow them, and manage library collections with real-time updates. It includes a modern and responsive frontend built with **React, TypeScript, Redux Toolkit, RTK Query**, and a robust backend using **Node.js, Express, MongoDB, and Mongoose**.

---

## 🚀 Project Overview

This system is ideal for libraries or educational institutions to manage their book collection and monitor borrowing activity. It supports:

- 📖 Book listing, creation, update, and deletion
- 👤 Borrowing books with validation (quantity + stock check)
- 📊 Borrow summary page
- 🔔 Toast notification system for success/error
- 📦 Real-time updates with API integration

---

## 🌐 Live Demo

🟢 [Live Site ](https://library-management-client-vert.vercel.app/)

---

## 🧑‍💻 Technologies Used

### Frontend (Client)
- React + TypeScript
- Redux Toolkit
- RTK Query
- Tailwind CSS
- React Hook Form
- ShadCN UI (Dialog, Input, Form components)

### Backend (Server)
- Node.js
- Express.js
- MongoDB + Mongoose
- TypeScript
- Custom Error Handling
- Aggregation & Validation Logic

--- 





# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```





