import React from 'react';

import styles from './TodoItem.module.css';

export const TodoItem: React.FC<{ todoText: string, onRemoveTodo: () => void }> = ({
  todoText, onRemoveTodo
}) => {
  return <li className={styles.item} onClick={onRemoveTodo}>{todoText}</li>;
};
