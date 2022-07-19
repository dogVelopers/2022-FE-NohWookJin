import { FormEvent } from 'react';
import useTextInput from '../hooks/uesTextInput';

interface Props {
  createTodo: (value: string) => void;
}

export default function InputSection({ createTodo }: Props) {
  const { value, onChange, clearValue } = useTextInput({});

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    createTodo(value);
    clearValue();
  }

  return (
    <section>
      <form onSubmit={onSubmit}>
        <input value={value} onChange={onChange} />
        <button>저장</button>
      </form>
    </section>
  );
}
<<<<<<< Updated upstream
=======

const StyledSection = styled.section`
  margin-top: 1rem;
`;
const StyledForm = styled.form`
  position: relative;
  bottom: 3.8rem;
`;
const StyledInput = styled.input`
  width: 45vw;
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
>>>>>>> Stashed changes
