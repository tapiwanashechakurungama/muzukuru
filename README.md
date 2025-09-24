# Todo Application

A modern, responsive Todo application built with React, TypeScript, and Tailwind CSS. This application allows users to create, read, update, and delete todos with a clean and intuitive user interface.

## Features

- **Add Todos**: Create new todos with a title and optional description
- **Mark as Complete/Incomplete**: Toggle todo completion status with a single click
- **Edit Todos**: Update existing todo items by double-clicking
- **Delete Todos**: Remove todos you no longer need
- **Persistent Storage**: Todos are automatically saved to the browser's localStorage
- **Data Persistence**: Your todos remain intact even after page refresh or browser restart
- **Responsive Design**: Works seamlessly on both desktop and mobile devices
- **Clean UI**: Modern and intuitive user interface built with Tailwind CSS

## Technologies Used

- **React**: A JavaScript library for building user interfaces
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript
- **Vite**: A fast build tool and development server
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs
- **React Icons**: Popular icons for React projects
- **localStorage**: For persisting todos between sessions
- **React Hooks**: For state management and side effects

## Getting Started

### Prerequisites

- Node.js (v14 or later recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/tapiwanashechakurungama/muzukuru.git
   cd muzukuru
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` or `yarn dev`: Start the development server
- `npm run build` or `yarn build`: Build the application for production
- `npm run preview` or `yarn preview`: Preview the production build locally
- `npm run lint` or `yarn lint`: Run ESLint to check for code issues

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

## Project Structure

```
src/
├── api/
│   └── todoApi.ts       # API functions for todo operations
├── components/
│   ├── TodoItem.tsx     # Component for individual todo items
│   └── TodoForm.tsx     # Form component for adding new todos
├── types/
│   └── todo.ts          # TypeScript type definitions
├── App.tsx              # Main application component
└── main.tsx             # Application entry point
```

Thank you looking forward to hearing from you
