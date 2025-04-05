import { Button, Form, InputGroup } from 'solid-bootstrap';
import { TodoList } from './TodoList';
import { TodoInput } from './TodoInput';

export function TodoView() {
  return (
    <Form>
      <TodoInput />
      <TodoList />
    </Form>
  );
}
