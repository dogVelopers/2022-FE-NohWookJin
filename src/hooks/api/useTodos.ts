import { useEffect, useState } from 'react';
import { instance } from '../../libs/api';

interface IGetTodos {
  records: ITodo[];
}

export default function useTodos() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  async function refreshTodos() {
    const response = await instance.get<{}, IGetTodos>('/todo');
    setTodos(response.records);
  }
  useEffect(() => {
    refreshTodos();
  }, []);

  async function createTodo(value: string) {
    await instance.post('/todo', { fields: { name: value } });
  }

  return { todos, createTodo };
}
