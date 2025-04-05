import { Button, Form, InputGroup } from 'solid-bootstrap';
import { TodoList } from './TodoList';
import { TodoInput } from './TodoInput';
import { createSignal } from 'solid-js';
import { Todo } from './types';

export function TodoView() {
  const [todos, setTodos] = createSignal<Todo[]>([]);

  const handleAddTodo = (text: string) => {
    setTodos([...todos(), { id: '', text, creationDate: new Date() }]);
  };

  return (
    <div class={'todo-View'}>
      <TodoInput onAddTodo={handleAddTodo} />
      <TodoList items={todos} />
    </div>
  );
}
