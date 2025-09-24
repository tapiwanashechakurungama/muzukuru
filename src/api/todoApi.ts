import type { Todo, CreateTodoDto, UpdateTodoDto } from '../types/todo';

// Simulate network delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Generate a random string for ID
const generateId = () => Math.random().toString(36).substring(2, 9);

// Storage key for todos
const STORAGE_KEY = 'todos_app';

// Get todos from localStorage
const getStoredTodos = (): Todo[] => {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};

// Save todos to localStorage
const saveTodos = (todos: Todo[]) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }
};

// Initialize todos from localStorage
let todos: Todo[] = [];

// Load todos from localStorage when the module is imported
if (typeof window !== 'undefined') {
  const storedTodos = getStoredTodos();
  if (storedTodos.length > 0) {
    todos = storedTodos;
  }
}

export const todoApi = {
  // Get all todos
  async getTodos(): Promise<Todo[]> {
    await delay(500);
    return [...todos];
  },

  // Create a new todo
  async createTodo(data: CreateTodoDto): Promise<Todo> {
    await delay(300);
    const newTodo: Todo = {
      id: generateId(),
      title: data.title,
      description: data.description || '',
      completed: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    todos.unshift(newTodo);
    saveTodos(todos);
    return { ...newTodo };
  },

  // Update a todo
  async updateTodo(id: string, data: UpdateTodoDto): Promise<Todo | null> {
    await delay(500);
    const todoToUpdate = todos.find(todo => todo.id === id);
    if (!todoToUpdate) return null;
    
    const updatedTodo: Todo = {
      ...todoToUpdate,
      ...data,
      id: todoToUpdate.id,
      createdAt: todoToUpdate.createdAt,
      updatedAt: new Date().toISOString(),
    };
    
    const index = todos.findIndex(todo => todo.id === id);
    if (index !== -1) {
      todos[index] = updatedTodo;
      saveTodos(todos);
    }
    
    return updatedTodo;
  },

  // Delete a todo
  async deleteTodo(id: string): Promise<boolean> {
    await delay(500);
    const initialLength = todos.length;
    todos = todos.filter(todo => todo.id !== id);
    const wasDeleted = todos.length !== initialLength;
    if (wasDeleted) {
      saveTodos(todos);
    }
    return wasDeleted;
  },

  // Toggle todo completion status
  async toggleTodo(id: string): Promise<Todo | null> {
    const todo = todos.find(t => t.id === id);
    if (!todo) return null;
    const updatedTodo = await this.updateTodo(id, { completed: !todo.completed });
    saveTodos(todos); // Ensure the updated todos are saved to localStorage
    return updatedTodo;
  }
};

// Initialize with empty array - localStorage will be used for persistence
// No need to initialize with sample data
