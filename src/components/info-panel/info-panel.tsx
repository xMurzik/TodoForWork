import React, { useMemo } from 'react';
import { ITodo, TFilterType } from '../../types';
import s from './info-panel.module.css';

interface InfoPanelProps {
  todos: Array<ITodo>;
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
  currentFilter: TFilterType;
  setCurrentFilter: React.Dispatch<React.SetStateAction<TFilterType>>;
}

const FILTERS: Array<TFilterType> = ['All', 'Active', 'Complited'];

const InfoPanel: React.FC<InfoPanelProps> = ({
  todos,
  setTodos,
  currentFilter,
  setCurrentFilter,
}) => {
  const onClickClearCompleted = () => {
    setTodos((prev) => prev.filter((el) => !el.isReady));
  };

  const todosLeft = useMemo(
    () =>
      todos.reduce((acc, el) => {
        if (el.isReady) {
          return acc;
        }
        return (acc += 1);
      }, 0),
    [todos]
  );

  return (
    <div className={s.containerPanel}>
      <h3 className={s.itemsLeft}>
        {todosLeft === 0 ? 'Nothing to do' : `${todosLeft} Items left`}
      </h3>
      <div className={s.sortOptions}>
        {FILTERS.map((el) => (
          <span
            key={el}
            onClick={() => setCurrentFilter(el)}
            className={s.spanSort}
            style={{ border: el === currentFilter ? '1px solid grey' : 'none' }}
          >
            {el}
          </span>
        ))}
      </div>
      <h3 onClick={onClickClearCompleted} className={s.clearCompleted}>
        Clear completed
      </h3>
    </div>
  );
};

export default InfoPanel;
