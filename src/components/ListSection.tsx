import { useEffect, useState } from 'react';

interface Props {
  todos: ITodo[];
  deleteTodo: (id: string) => void;
}

export default function ListSection({ todos, deleteTodo }: Props) {
  function onClickDeleteBtn(id: string) {
    // early return
    if (!confirm('삭제?')) return;

    //before
    // if (confirm('삭제?')) {
    //   deleteTodo(id);
    // }
  }

  return (
    <section>
      {todos.map(todo => (
<<<<<<< Updated upstream
        <p key={todo.id}>{todo.fields.name}</p>
=======
        <Styledp key={todo.id}>
          {todo.fields.name} <button onClick={() => onClickDeleteBtn(todo.id)}>X</button>
        </Styledp>
>>>>>>> Stashed changes
      ))}
    </section>
  );
}
