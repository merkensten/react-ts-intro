import React, { useContext } from 'react';
import { TodoItem } from './TodoItem';
import { TodosContext } from '../store/todos-context';
import styles from './Todos.module.css';

export const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  return (
    <ul className={styles.todos}>
      {todosCtx.items.map((item) => {
        return (
          <TodoItem
            key={item.id}
            todoText={item.text}
            onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
          />
        );
      })}
    </ul>
  );
};
