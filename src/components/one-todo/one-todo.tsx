import React from 'react';
import { BiCheckCircle, BiCircle } from 'react-icons/bi';
import { ITodo } from '../../types';
import s from './one-todo.module.css';

interface IOneTodoProps extends ITodo {
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

const OneTodo: React.FC<IOneTodoProps> = ({ id, isReady, value, setTodos }) => {
  const onClickIconChangeStatus = () => {
    setTodos((prev) =>
      prev.map((el) => (el.id === id ? { ...el, isReady: !el.isReady } : el))
    );
  };

  return (
    <div className={s.containerTodo}>
      {isReady ? (
        <BiCheckCircle onClick={onClickIconChangeStatus} className={s.icons} />
      ) : (
        <BiCircle onClick={onClickIconChangeStatus} className={s.icons} />
      )}

      <p
        style={{ textDecoration: isReady ? 'line-through' : 'none' }}
        className={s.innerText}
      >
        {value}
      </p>
    </div>
  );
};

export default OneTodo;
