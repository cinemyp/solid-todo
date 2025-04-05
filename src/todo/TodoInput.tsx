import { Button, Form, InputGroup } from 'solid-bootstrap';

type TodoInputProps = {
  onAddTodo: (text: string) => void;
};

export function TodoInput(props: TodoInputProps) {
  let input: HTMLInputElement | undefined;
  return (
    <Form>
      <Form.Group class="mb-3" controlId="todoInput">
        <InputGroup>
          <Form.Control
            ref={input}
            type="input"
            placeholder="I need to do..."
          />
          <Button
            onClick={() => {
              if (!input?.value.trim()) return;
              props.onAddTodo(input.value.trim());
              input.value = '';
            }}
          >
            +
          </Button>
        </InputGroup>
      </Form.Group>
    </Form>
  );
}
