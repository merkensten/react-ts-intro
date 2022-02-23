import React, { useRef, useContext } from 'react';
import { TodosContext } from '../store/todos-context';
import styles from './NewTodo.module.css';

export const NewTodo: React.FC = () => {

  const todosCtx = useContext(TodosContext);

  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const eneteredText = todoTextInputRef.current!.value;

    if (eneteredText.trim().length === 0) {
        return;
    }

    todosCtx.addTodo(eneteredText);
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};
