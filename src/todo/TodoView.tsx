import { TodoInput } from './TodoInput';
import { TodoList } from './TodoList';

export function TodoView() {
  return (
    <div>
      <TodoInput />
      <TodoList />
    </div>
  );
}
