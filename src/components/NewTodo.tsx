import React, { useRef } from 'react';

import styles from './NewTodo.module.css';

export const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const eneteredText = todoTextInputRef.current!.value;

    if (eneteredText.trim().length === 0) {
        return;
    }

    props.onAddTodo(eneteredText);
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};
