import { Button, Form, InputGroup } from 'solid-bootstrap';
import { TodoList } from './TodoList';

export function TodoView() {
  return (
    <Form>
      <Form.Group class="mb-3" controlId="todoInput">
        <InputGroup>
          <Form.Control type="input" placeholder="I need to do..." />
          <Button>Go</Button>
        </InputGroup>
      </Form.Group>
    </Form>
  );
}
