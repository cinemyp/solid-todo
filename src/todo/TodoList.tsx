import { Accessor, For } from 'solid-js';
import { Todo } from './types';
import { Button, ListGroup } from 'solid-bootstrap';

export function TodoList(props: {
  items: Accessor<Todo[]>;
  onItemRemove: (id: Todo['id']) => void;
}) {
  return (
    <ListGroup class={'todo-List'} variant={'flush'}>
      <For each={props.items()}>
        {(item) => {
          return (
            <ListGroup.Item>
              <div
                class={
                  'todo-List__item flex flex-row justify-between items-center gap-8'
                }
                data-todo-id={item.id}
              >
                <span class={'max-w-80 truncate'}>{item.text}</span>
                <Button
                  variant={'outline-danger'}
                  title={'Remove'}
                  size={'sm'}
                  onClick={() => {
                    props.onItemRemove(item.id);
                  }}
                >
                  -
                </Button>
              </div>
            </ListGroup.Item>
          );
        }}
      </For>
    </ListGroup>
  );
}
