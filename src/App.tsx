import InputSection from './components/InputSection';
import ListSection from './components/ListSection';
import useTodos from './hooks/api/useTodos';
import styled from 'styled-components';

export default function App() {
  const { createTodo, todos } = useTodos();

  return (
    <StyledMain>
      <h2>ToDo 🐶</h2>
      <ListSection todos={todos} />
      <InputSection createTodo={createTodo} />
    </StyledMain>
  );
}

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: whitesmoke;
  height: 100vh;
`;
