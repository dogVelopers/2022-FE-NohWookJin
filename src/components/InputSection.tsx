import { FormEvent } from 'react';
import useTextInput from '../hooks/uesTextInput';
import styled from 'styled-components';
import useTodos from '../hooks/api/useTodos';

// interface Props {
//   createTodo: (value: string) => void;
// }

export default function InputSection() {
  const { createTodo } = useTodos();
  const { value, onChange, clearValue } = useTextInput({});

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    createTodo(value);
    clearValue();
  }

  return (
    <StyledSection>
      <StyledForm onSubmit={onSubmit}>
        <StyledInput placeholder="오늘도 화이팅! 🏃" value={value} onChange={onChange} />
        <StyledButton>저장</StyledButton>
      </StyledForm>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  margin-top: 1rem;
`;
const StyledForm = styled.form`
  position: relative;
  bottom: 3.8rem;
`;
const StyledInput = styled.input`
  width: 45vw;
  margin: 0 1rem;
  padding: 0.5rem 0.4rem;
  border: none;
  border-radius: 0.2rem;
  background-color: whitesmoke;
`;
const StyledButton = styled.button`
  border: none;
  background-color: rgb(240, 240, 180);
  margin-right: 0.5rem;
`;
