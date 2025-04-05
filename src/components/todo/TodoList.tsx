import { Accessor, For } from 'solid-js';
import clsx from 'clsx';
import { Icon } from '#ui/Icon/Icon';
import { Button } from '#ui/Button/Button';
import { Todo } from '#shared/types/todo';

import styles from './TodoList.module.scss';

type TodoListProps = {
  items: Accessor<Todo[]>;
  onItemRemove: (id: Todo['id']) => void;
  onTodoToggle: (id: Todo['id']) => void;
};

export function TodoList(props: TodoListProps) {
  return (
    <ul class={styles['todo-list']}>
      <For each={props.items()}>
        {(item) => {
          return (
            <li>
              <div class={styles['todo-list__item']} data-todo-id={item.id}>
                <input
                  class={styles['todo-list__checkbox']}
                  type={'checkbox'}
                  checked={item.done}
                  onChange={() => {
                    props.onTodoToggle(item.id);
                  }}
                />
                <span
                  class={clsx(
                    styles['todo-list__text'],
                    item.done && styles['done']
                  )}
                >
                  {item.text}
                </span>
                <Button onClick={() => props.onItemRemove(item.id)}>
                  <Icon name="trash" size={20} />
                </Button>
              </div>
            </li>
          );
        }}
      </For>
    </ul>
  );
}
