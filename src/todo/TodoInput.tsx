import { Button, Form, InputGroup } from 'solid-bootstrap';

type TodoInputProps = {
  onAddTodo: (text: string) => void;
};

export function TodoInput(props: TodoInputProps) {
  let input: HTMLInputElement | undefined;

  const handleSubmitTodo = (event: Event) => {
    event.preventDefault();
    if (!input?.value.trim()) return;
    props.onAddTodo(input.value.trim());
    input.value = '';
  };

  return (
    <Form onSubmit={handleSubmitTodo}>
      <Form.Group class="mb-3" controlId="todoInput">
        <InputGroup>
          <Form.Control
            ref={input}
            type="input"
            placeholder="I need to do..."
            maxLength={128}
          />
          <Button onClick={handleSubmitTodo}>+</Button>
        </InputGroup>
      </Form.Group>
    </Form>
  );
}
