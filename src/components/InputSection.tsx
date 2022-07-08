import { FormEvent } from 'react';
import useTextInput from '../hooks/uesTextInput';

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
    <section>
      <form onSubmit={onSubmit}>
        <input value={value} onChange={onChange} />
        <button>저장</button>
      </form>
    </section>
  );
}
