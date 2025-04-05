import { Accessor, For } from 'solid-js';
import { Todo } from './types';

export function TodoList(props: { items: Accessor<Todo[]> }) {
  return (
    <div class={'todo-List'}>
      <For each={props.items()}>
        {(item) => {
          return <div>{item.text}</div>;
        }}
      </For>
    </div>
  );
}
