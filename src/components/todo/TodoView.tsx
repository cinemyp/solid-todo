import { createSignal } from 'solid-js';
import { v4 as uuid } from 'uuid';

import { TodoList } from './TodoList';
import { TodoInput } from './TodoInput';
import { Todo } from './types';
import styles from './TodoView.module.scss';

export function TodoView() {
  const [todos, setTodos] = createSignal<Todo[]>([]);

  const handleAddTodo = (text: string) => {
    setTodos([
      ...todos(),
      { id: uuid(), text, done: false, creationDate: new Date() },
    ]);
  };

  const handleTodoRemove = (id: string) => {
    setTodos([...todos()].filter((item) => item.id !== id));
  };

  const handleTodoToggle = (id: string) => {
    setTodos(
      todos().map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  };

  return (
    <div class={styles['todo-view']}>
      <div class={styles['todo-view__content']}>
        <TodoInput onAddTodo={handleAddTodo} />
        <TodoList
          items={todos}
          onItemRemove={handleTodoRemove}
          onTodoToggle={handleTodoToggle}
        />
      </div>
    </div>
  );
}
