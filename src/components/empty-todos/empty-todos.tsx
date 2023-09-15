import React from 'react';
import s from './empty-todos.module.css';

const EmptyTodos: React.FC = () => {
  return <div className={s.containerEmptyTodos}>No todos here</div>;
};

export default EmptyTodos;
