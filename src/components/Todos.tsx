import React from 'react';
import { Todo } from '../models/todo';
import { TodoItem } from './TodoItem';

import styles from './Todos.module.css';


export const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul className={styles.todos}>
      {props.items.map((item) => {
        return <TodoItem key={item.id} todoText={item.text} />;
      })}
    </ul>
  );
};
