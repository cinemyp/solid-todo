import { Accessor, For } from 'solid-js';
import clsx from 'clsx';

import { Todo } from './types';
import styles from './TodoList.module.scss';
import { Icon } from './Icon';

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
                <button
                  class={styles['todo-list__remove']}
                  onClick={() => props.onItemRemove(item.id)}
                >
                  <Icon name="trash" size={20} />
                </button>
              </div>
            </li>
          );
        }}
      </For>
    </ul>
  );
}
