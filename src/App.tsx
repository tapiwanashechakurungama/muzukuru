import { useState, useEffect } from 'react';
import type { Todo } from './types/todo';
import { todoApi } from './api/todoApi';
import { TodoItem } from './components/TodoItem';
import { TodoForm } from './components/TodoForm';
import { Bars3Icon } from '@heroicons/react/24/solid';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch todos on component mount
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setIsLoading(true);
        const data = await todoApi.getTodos();
        setTodos(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching todos:', err);
        setError('Failed to load todos. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchTodos();
  }, []);

  const handleAddTodo = (newTodo: Todo) => {
    setTodos(prevTodos => [newTodo, ...prevTodos]);
  };

  const handleUpdateTodo = (updatedTodo: Todo) => {
    setTodos(prevTodos =>
      prevTodos.map(todo => (todo.id === updatedTodo.id ? updatedTodo : todo))
    );
  };

  const handleDeleteTodo = (id: string) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  const completedTodos = todos.filter(todo => todo.completed);
  const activeTodos = todos.filter(todo => !todo.completed);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <header className="mb-8">
          <div className="flex items-center mb-2">
            <Bars3Icon className="h-8 w-8 text-blue-500 mr-2" />
            <h1 className="text-3xl font-bold text-gray-900">Todo App</h1>
          </div>
          <p className="text-gray-600">A simple todo application built with React and TypeScript</p>
        </header>

        <main>
          <TodoForm onTodoAdded={handleAddTodo} />

          {error && (
            <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-md">
              {error}
            </div>
          )}

          {isLoading && todos.length === 0 ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                  Active Tasks
                  <span className="ml-2 px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                    {activeTodos.length}
                  </span>
                </h2>
                {activeTodos.length > 0 ? (
                  <div className="space-y-3">
                    {activeTodos.map(todo => (
                      <TodoItem
                        key={todo.id}
                        todo={todo}
                        onUpdate={handleUpdateTodo}
                        onDelete={handleDeleteTodo}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    No active tasks. Add one above!
                  </div>
                )}
              </div>

              {completedTodos.length > 0 && (
                <div>
                  <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                    Completed
                    <span className="ml-2 px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                      {completedTodos.length}
                    </span>
                  </h2>
                  <div className="space-y-3 opacity-75">
                    {completedTodos.map(todo => (
                      <TodoItem
                        key={todo.id}
                        todo={todo}
                        onUpdate={handleUpdateTodo}
                        onDelete={handleDeleteTodo}
                      />
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </main>

        <footer className="mt-12 text-center text-sm text-gray-500">
         <p>2025 &copy; Muzukuru. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
