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
    <div class={'todo-View'}>
      <TodoInput onAddTodo={handleAddTodo} />
      <TodoList items={todos} onItemRemove={handleTodoRemove} />
    </div>
  );
}
