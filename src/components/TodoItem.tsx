import React from 'react';

import styles from './TodoItem.module.css';

export const TodoItem: React.FC<{ todoText: string }> = ({
  todoText,
}) => {
  return <li className={styles.item}>{todoText}</li>;
};
