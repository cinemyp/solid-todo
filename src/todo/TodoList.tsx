import { Accessor, For } from 'solid-js';
import { Todo } from './types';
import { Button, ListGroup } from 'solid-bootstrap';
import clsx from 'clsx';

export function TodoList(props: {
  items: Accessor<Todo[]>;
  onItemRemove: (id: Todo['id']) => void;
  onTodoToggle: (id: Todo['id']) => void;
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
                <span
                  class={clsx(
                    'max-w-80 truncate',
                    item.done && 'line-through text-stone-400'
                  )}
                >
                  {item.text}
                </span>
                <Button
                  variant={clsx({
                    'outline-dark': !item.done,
                    'outline-success': item.done,
                  })}
                  title={item.done ? 'Undone' : 'Done'}
                  size={'sm'}
                  onClick={() => {
                    props.onTodoToggle(item.id);
                  }}
                >
                  {item.done ? 'Undone' : 'Done'}
                </Button>
              </div>
            </ListGroup.Item>
          );
        }}
      </For>
    </ListGroup>
  );
}
