import InputSection from './components/InputSection';
import ListSection from './components/ListSection';
import useTodos from './hooks/api/useTodos';
<<<<<<< Updated upstream
=======
import styled from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';
import { colors } from './styles/Colors';
>>>>>>> Stashed changes

export default function App() {
  const { createTodo, todos, deleteTodo, isLoading } = useTodos();

  // 로딩
  // if (isLoading)
  //   return (
  //     <div>
  //       <h1>로딩중...</h1>
  //     </div>
  //   );

  return (
<<<<<<< Updated upstream
    <div>
      <InputSection createTodo={createTodo} />
      <ListSection todos={todos} />
    </div>
  );
}
=======
    <>
      <GlobalStyle />
      <StyledMain>
        <h2>ToDo 🐶</h2>
        <ListSection todos={todos} deleteTodo={deleteTodo} />
        <InputSection createTodo={createTodo} />
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
>>>>>>> Stashed changes
