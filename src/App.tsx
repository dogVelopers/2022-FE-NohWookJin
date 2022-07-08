import InputSection from './components/InputSection';
import ListSection from './components/ListSection';
import useTodos from './hooks/api/useTodos';

export default function App() {
  const { createTodo, todos } = useTodos();

  return (
    <div>
      <InputSection createTodo={createTodo} />
      <ListSection todos={todos} />
    </div>
  );
}
