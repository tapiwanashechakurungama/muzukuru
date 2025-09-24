export interface Todo {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}

export type CreateTodoDto = Omit<Todo, 'id' | 'createdAt' | 'updatedAt' | 'completed'>;
export type UpdateTodoDto = Partial<Omit<Todo, 'id' | 'createdAt' | 'updatedAt'>>;
