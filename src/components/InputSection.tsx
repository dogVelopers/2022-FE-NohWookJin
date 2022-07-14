import { FormEvent } from 'react';
import useTextInput from '../hooks/uesTextInput';
import styled from 'styled-components';

interface Props {
  createTodo: (value: string) => void;
}

export default function InputSection({ createTodo }: Props) {
  const { value, onChange, clearValue } = useTextInput({});

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault;
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
  width: 48vw;
  margin: 0rem 0.2rem;
  padding: 0.5rem 0.4rem;
  border: none;
  border-radius: 0.2rem;
  background-color: whitesmoke;
`;
const StyledButton = styled.button`
  border: none;
  background-color: rgb(240, 240, 180);
`;
