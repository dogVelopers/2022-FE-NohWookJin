import InputSection from '../components/InputSection';
import ListSection from '../components/ListSection';
import useTodos from '../hooks/api/useTodos';
import styled from 'styled-components';
import { colors } from '../styles/Colors';

export default function Main() {
  // const { createTodo, todos, deleteTodo, isLoading } = useTodos();
  const { isLoading } = useTodos();

  return (
    <>
      <StyledMain>
        <h2>ToDo 🐶</h2>
        <ListSection />
        <InputSection />
        {/* 삼항연산자  */}
        {/* {isLoading ? <StyledLoader /> : <></>} */}
        {/* true면은 뒤의 것을 반환 */}
        {isLoading && <StyledLoader />}
      </StyledMain>
    </>
  );
}

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.white};
  height: 100vh;
  padding-top: 1.5rem;
`;

const StyledLoader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  background-color: lightgray;
  opacity: 0.5;
`;
