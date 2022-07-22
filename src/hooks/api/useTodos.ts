import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { todosState } from '../../store/todos';

import { instance } from '../../libs/api';

// const [값, 저장하는 콜백] = useState;
// const [전역값, 정하는 콜백] = useRecoilState;
// const 저장하는 콜백 = useSetRecoilState

interface IGetTodos {
  records: ITodo[];
}

export default function useTodos() {
  // const [todos, setTodos] = useState<ITodo[]>([]);
  // 로딩 state : 로딩중이 아닌 것으로 초기 세팅

  const [todos, setTodos] = useRecoilState(todosState);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function refreshTodos() {
    setIsLoading(true); // get으로 받기 전에 로딩 시작(await이기 때문)
    const response = await instance.get<{}, IGetTodos>('/todo');
    setTodos(response.records);
    setIsLoading(false); // 로딩 끝
  }
  useEffect(() => {
    refreshTodos();
  }, []);

  async function createTodo(value: string) {
    if (isLoading) return;
    await instance.post('/todo', { fields: { name: value } });
    // 최신화
    refreshTodos();
  }

  async function deleteTodo(todoId: string) {
    // http method => post, get, delete 등
    // await instance.delete(`/todo/여기에 정보`)
    await instance.delete(`/todo/${todoId}`);
    refreshTodos();
  }

  return { todos, createTodo, deleteTodo, isLoading };
}
