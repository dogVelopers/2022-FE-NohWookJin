import { atom } from 'recoil';

export const todosState = atom<ITodo[]>({
  key: 'todosState',
  default: [],
});
