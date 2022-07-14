import { useEffect, useState } from 'react';
import styled from 'styled-components';

interface Props {
  todos: ITodo[];
}

export default function ListSection({ todos }: Props) {
  return (
    <StyledSection>
      {todos.map(todo => (
        <Styledp key={todo.id}>{todo.fields.name}</Styledp>
      ))}
    </StyledSection>
  );
}

const StyledSection = styled.section`
  background-color: rgb(240, 240, 180);
  border-radius: 1.3rem;
  padding: 0.5rem 1rem;
  margin-top: 0rem;
  width: 50vw;
  height: 100vh;
`;

const Styledp = styled.p`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0.2rem 0.1rem;
  font-size: 0.9rem;
`;
