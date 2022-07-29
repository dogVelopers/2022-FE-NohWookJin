import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { instance } from '../libs/api';
import styled from 'styled-components';
import useTodos from '../hooks/api/useTodos';

export default function Detail() {
  const [todo, setTodo] = useState<ITodo | null>(null);

  const { todoId } = useParams();
  const { isLoading } = useTodos();

  useEffect(() => {
    async function saveTodo() {
      const response = await instance.get<{}, ITodo>(`/todo/${todoId}`);
      // instance가 get하는 타입을 제너릭으로 확인
      setTodo(response);
    }
    saveTodo();
  }, []);
  return (
    <StyledContainer>
      <StyledSection>
        <StyledHeader>
          <StyledCircleContainer>
            <StyledCircle></StyledCircle>
            <StyledCircle></StyledCircle>
            <StyledCircle></StyledCircle>
          </StyledCircleContainer>
          <StyledH1>Detail</StyledH1>
          <div></div>
        </StyledHeader>
        <StyledMain>
          {/* <p>{todoId}</p> */}
          <StyledP>🏃 열심히 달리고 달려서 목표를 달성해요! 🏃</StyledP>
          <StyledList>{todo?.fields.name}</StyledList>
          <StyledTime>작성 시간 : {todo?.createdTime}</StyledTime>
          {/* optional chaning */}
        </StyledMain>
      </StyledSection>
      {isLoading && <StyledLoader />}
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const StyledSection = styled.section`
  background-color: rgb(236, 238, 166);
  width: 40vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const StyledHeader = styled.header`
  background-color: rgba(30, 30, 30);
  width: 40vw;
  padding: 0.5rem;
  padding-top: 0.55rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledH1 = styled.h1`
  color: white;
  font-size: 1rem;
  padding-right: 5rem;
`;

const StyledCircleContainer = styled.div`
  display: flex;
`;
const StyledCircle = styled.div`
  padding: 0.35rem;
  width: 0.5vw;
  border-radius: 50%;
  margin-right: 0.38rem;
  &: first-of-type {
    background-color: rgb(250, 70, 70);
  }
  &: nth-of-type(2) {
    background-color: rgb(254, 176, 36);
  }
  &: last-of-type {
    background-color: rgb(40, 193, 49);
  }
`;
const StyledMain = styled.main`
  heigth: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledP = styled.p`
  margin-bottom: 11rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.7);
`;
const StyledList = styled.p`
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 0.3rem;
`;
const StyledTime = styled.p`
  font-size: 0.8rem;
  text-align: center;
  color: rgba(0, 0, 0, 0.4);
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
