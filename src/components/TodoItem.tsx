import { useState } from 'react';
import type { Todo } from '../types/todo';
import { todoApi } from '../api/todoApi';
import { PencilIcon, TrashIcon, CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';

interface TodoItemProps {
  todo: Todo;
  onUpdate: (updatedTodo: Todo) => void;
  onDelete: (id: string) => void;
}

export function TodoItem({ todo, onUpdate, onDelete }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  const [isLoading, setIsLoading] = useState(false);

  const handleToggleComplete = async () => {
    try {
      setIsLoading(true);
      const updatedTodo = await todoApi.toggleTodo(todo.id);
      if (updatedTodo) {
        onUpdate(updatedTodo);
      }
    } catch (error) {
      console.error('Error toggling todo:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdate = async () => {
    try {
      setIsLoading(true);
      const updatedTodo = await todoApi.updateTodo(todo.id, { title, description });
      if (updatedTodo) {
        onUpdate(updatedTodo);
        setIsEditing(false);
      }
    } catch (error) {
      console.error('Error updating todo:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this todo?')) {
      try {
        setIsLoading(true);
        const success = await todoApi.deleteTodo(todo.id);
        if (success) {
          onDelete(todo.id);
        }
      } catch (error) {
        console.error('Error deleting todo:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  if (isEditing) {
    return (
      <div className="p-4 mb-2 border rounded-lg bg-white shadow-sm">
        <div className="flex flex-col space-y-2">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[80px]"
            disabled={isLoading}
          />
          <div className="flex justify-end space-x-2 mt-2">
            <button
              onClick={() => setIsEditing(false)}
              className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded"
              disabled={isLoading}
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
            <button
              onClick={handleUpdate}
              className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 flex items-center"
              disabled={isLoading || !title.trim()}
            >
              <CheckIcon className="h-4 w-4 mr-1" />
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 mb-2 border rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggleComplete}
          disabled={isLoading}
          className="mt-1 h-5 w-5 text-blue-600 rounded focus:ring-blue-500 cursor-pointer"
        />
        <div className="ml-3 flex-1">
          <h3 className={`text-lg font-medium ${todo.completed ? 'line-through text-gray-400' : 'text-gray-900'}`}>
            {todo.title}
          </h3>
          {todo.description && (
            <p className={`mt-1 text-sm ${todo.completed ? 'text-gray-400' : 'text-gray-600'}`}>
              {todo.description}
            </p>
          )}
          <div className="mt-2 text-xs text-gray-500">
            Created: {new Date(todo.createdAt).toLocaleDateString()}
          </div>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => setIsEditing(true)}
            className="p-1 text-blue-500 hover:bg-blue-50 rounded-full"
            disabled={isLoading}
            aria-label="Edit todo"
          >
            <PencilIcon className="h-5 w-5" />
          </button>
          <button
            onClick={handleDelete}
            className="p-1 text-red-500 hover:bg-red-50 rounded-full"
            disabled={isLoading}
            aria-label="Delete todo"
          >
            <TrashIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
