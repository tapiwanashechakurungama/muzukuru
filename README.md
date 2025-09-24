# Muzukuru - Modern Todo Application

A modern, responsive Todo application built with React, TypeScript, Vite, and Tailwind CSS. This application allows users to create, read, update, and delete todos with a clean and intuitive user interface.

## ✨ Features

- **📝 Add Todos**: Create new todos with a title and optional description
- **✅ Mark as Complete/Incomplete**: Toggle todo completion status with a single click
- **✏️ Edit Todos**: Update existing todo items by double-clicking
- **🗑️ Delete Todos**: Remove todos you no longer need
- **💾 Persistent Storage**: Todos are automatically saved to the browser's localStorage
- **🔄 Data Persistence**: Your todos remain intact even after page refresh or browser restart
- **📱 Responsive Design**: Works seamlessly on both desktop and mobile devices
- **🎨 Clean UI**: Modern and intuitive user interface built with Tailwind CSS
- **⚡ Fast Development**: Instant server start and fast HMR with Vite
- **🔒 Type Safety**: Built with TypeScript for better developer experience
- **🚀 Production Ready**: Optimized builds and deployment ready

## 🛠️ Technologies Used

- **React 19** - A JavaScript library for building user interfaces
- **TypeScript** - A typed superset of JavaScript that compiles to plain JavaScript
- **Vite** - Next generation frontend tooling
- **Tailwind CSS** - A utility-first CSS framework
- **React Icons** - Popular icons for React projects
- **ESLint & Prettier** - For code linting and formatting
- **React Router** - For client-side routing
- **localStorage** - For persisting todos between sessions

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- npm (v9 or later) or yarn (v1.22 or later)
- Git (for version control)

### 📥 Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/muzukuru.git
   cd muzukuru
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

### 📋 Available Scripts

- `dev` - Start the development server
- `build` - Build the application for production
- `preview` - Preview the production build locally
- `lint` - Run ESLint to check for code issues
- `format` - Format code with Prettier
- `type-check` - Check TypeScript types
- `check` - Run type checking and linting

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to a GitHub, GitLab, or Bitbucket repository
2. Import your project on [Vercel](https://vercel.com/import)
3. Vercel will automatically detect your Vite project and set up the build settings
4. Click "Deploy" and your app will be live!


### Manual Build

1. Build the application:
   ```bash
   npm run build
   ```
2. The built files will be in the `dist` directory
3. Deploy the contents of the `dist` directory to your preferred hosting service

## Usage

1. **Adding a Todo**:
   - Type your todo in the input field at the top of the page
   - Press Enter or click the "Add" button to add the todo
   - Your todo is automatically saved to the browser's storage

2. **Completing a Todo**:
   - Click the checkbox next to a todo to mark it as complete
   - Click it again to mark it as incomplete
   - Changes are saved automatically

3. **Editing a Todo**:
   - Double-click on a todo's text to edit it
   - Press Enter to save your changes or Escape to cancel
   - Edits are persisted automatically

4. **Deleting a Todo**:
   - Click the trash can icon next to a todo to delete it
   - The change is saved immediately

5. **Refreshing the Page**:
   - All your todos are automatically loaded when you return to the page
   - Your todo list remains exactly as you left it, even after closing the browser
   - No need to create an account or log in - your data is stored locally in your browser

## 🗂️ Project Structure

```
muzukuru/
├── public/               # Static files
├── src/
│   ├── api/             # API functions and services
│   │   └── todoApi.ts   # Todo API service functions
│   │
│   ├── assets/          # Static assets (images, fonts, etc.)
│   │
│   ├── components/      # Reusable UI components
│   │   ├── TodoItem.tsx # Todo item component
│   │   └── TodoForm.tsx # Todo form component
│   │
│   ├── hooks/           # Custom React hooks
│   │
│   ├── styles/          # Global styles and Tailwind config
│   │   └── index.css    # Main stylesheet
│   │
│   ├── types/           # TypeScript type definitions
│   │   └── todo.ts      # Todo-related type definitions
│   │
│   ├── utils/           # Utility functions
│   │
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   └── vite-env.d.ts    # Vite type declarations
│
├── .eslintrc.cjs        # ESLint configuration
├── .gitignore           # Git ignore file
├── .prettierrc         # Prettier configuration
├── index.html           # Main HTML file
├── package.json         # Project dependencies and scripts
├── postcss.config.js    # PostCSS configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
├── tsconfig.node.json   # TypeScript configuration for Node
└── vite.config.ts       # Vite configuration
├── App.tsx              # Main application component
└── main.tsx             # Application entry point
```

Thank you looking forward to hearing from you
