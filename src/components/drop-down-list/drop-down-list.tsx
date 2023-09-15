import React, { useMemo, useState } from 'react';
import { Transition } from 'react-transition-group';
import OneTodo from '../one-todo/one-todo';
import InfoPanel from '../info-panel/info-panel';
import EmptyTodos from '../empty-todos/empty-todos';
import { ITodo, TFilterType } from '../../types';
import s from './drop-down-list.module.css';

interface IDropDownListProps {
  listVisible: boolean;
  todos: Array<ITodo>;
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

const DropDownList: React.FC<IDropDownListProps> = ({
  setTodos,
  listVisible,
  todos,
}) => {
  const [currentFilter, setCurrentFilter] = useState<TFilterType>('All');

  const todosToRender = useMemo(() => {
    switch (currentFilter) {
      case 'All':
        return todos;
      case 'Active':
        return todos.filter((el) => !el.isReady);
      case 'Complited':
        return todos.filter((el) => el.isReady);
    }
  }, [currentFilter, todos]);

  return (
    <Transition in={listVisible} timeout={600} unmountOnExit mountOnEnter>
      {(state) => (
        <div className={`${s[`${state}`]}`}>
          {todosToRender.map((el) => (
            <OneTodo key={el.id} setTodos={setTodos} {...el} />
          ))}
          {!todosToRender.length && <EmptyTodos />}
          <InfoPanel
            currentFilter={currentFilter}
            setCurrentFilter={setCurrentFilter}
            setTodos={setTodos}
            todos={todos}
          />
        </div>
      )}
    </Transition>
  );
};

export default DropDownList;
