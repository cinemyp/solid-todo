import { createSignal } from 'solid-js';
import { v4 as uuid } from 'uuid';

import { TodoList } from './TodoList';
import { TodoInput } from './TodoInput';
import { Todo } from './types';

export function TodoView() {
  const [todos, setTodos] = createSignal<Todo[]>([]);

  const handleAddTodo = (text: string) => {
    setTodos([...todos(), { id: uuid(), text, creationDate: new Date() }]);
  };

  const handleTodoRemove = (id: string) => {
    setTodos([...todos()].filter((item) => item.id !== id));
  };

  return (
    <div
      class={
        'todo-View grid grid-cols-[1fr_1px_1fr] h-full gap-24 items-center py-12'
      }
    >
      <TodoInput onAddTodo={handleAddTodo} />
      <div class={'border border-1 border-solid w-0 h-full'}></div>
      <TodoList items={todos} onItemRemove={handleTodoRemove} />
    </div>
  );
}
