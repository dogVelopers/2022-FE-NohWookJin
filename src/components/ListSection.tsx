import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useTodos from '../hooks/api/useTodos';

// interface Props {
//   todos: ITodo[];
//   deleteTodo: (id: string) => void;
// }

import { Link } from 'react-router-dom';

export default function ListSection() {
  const { deleteTodo, todos } = useTodos();

  function onClickDeleteBtn(id: string) {
    // early return
    // if (!confirm('삭제?')) return;

    // before
    if (confirm('삭제?')) {
      deleteTodo(id);
    }
  }

  return (
    <StyledSection>
      {todos.map(todo => (
        <Styledp key={todo.id}>
          {todo.fields.name}
          <StyledButton onClick={() => onClickDeleteBtn(todo.id)}>X</StyledButton>
          <Link to={`/todos/${todo.id}`}>(자세히 보기)</Link>
        </Styledp>
      ))}
    </StyledSection>
  );
}

const StyledSection = styled.section`
  background-color: rgb(240, 240, 180);
  border-radius: 1.3rem;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  width: 50vw;
  height: 100vh;
`;

const Styledp = styled.p`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1rem 1rem;
  font-size: 0.9rem;
`;
const StyledButton = styled.button`
  float: right;
  border: none;
  background-color: rgb(240, 240, 180);
`;
