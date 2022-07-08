import { useEffect, useState } from 'react';

interface Props {
  todos: ITodo[];
}

export default function ListSection({ todos }: Props) {
  return (
    <section>
      {todos.map(todo => (
        <p key={todo.id}>{todo.fields.name}</p>
      ))}
    </section>
  );
}
