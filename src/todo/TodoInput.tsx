import styles from './TodoInput.module.scss';

type TodoInputProps = {
  onAddTodo: (text: string) => void;
};

export function TodoInput(props: TodoInputProps) {
  let input: HTMLInputElement | undefined;

  const addTodo = () => {
    if (!input?.value.trim()) return;
    props.onAddTodo(input.value.trim());
    input.value = '';
  };

  return (
    <div class={styles['todo-input__wrapper']}>
      <input
        ref={input}
        class={styles['todo-input']}
        type={'text'}
        placeholder={'I need to do...'}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            addTodo();
          }
        }}
      />
      <button class={'todo-input__add'} onClick={addTodo}>
        Add
      </button>
    </div>
  );
}
