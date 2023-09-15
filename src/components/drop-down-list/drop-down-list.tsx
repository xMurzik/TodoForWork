import React, { useMemo, useState, useContext } from 'react';
import { Transition } from 'react-transition-group';
import OneTodo from '../one-todo/one-todo';
import InfoPanel from '../info-panel/info-panel';
import EmptyTodos from '../empty-todos/empty-todos';
import { TFilterType } from '../../types';
import { TodosContext } from '../../store/TodosListProvider';
import s from './drop-down-list.module.css';

const DropDownList: React.FC = () => {
  const TodosData = useContext(TodosContext);
  const [currentFilter, setCurrentFilter] = useState<TFilterType>('All');

  const todosToRender = useMemo(() => {
    switch (currentFilter) {
      case 'All':
        return TodosData.todos;
      case 'Active':
        return TodosData.todos.filter((el) => !el.isReady);
      case 'Complited':
        return TodosData.todos.filter((el) => el.isReady);
    }
  }, [currentFilter, TodosData.todos]);

  return (
    <Transition
      in={TodosData.listVisible}
      timeout={600}
      unmountOnExit
      mountOnEnter
    >
      {(state) => (
        <>
          <div
            style={{ overflowY: todosToRender.length > 8 ? 'scroll' : 'unset' }}
            className={`${s.containerListTodos} ${s[`${state}`]}`}
          >
            {todosToRender.map((el) => (
              <OneTodo setTodos={TodosData.setTodos} {...el} />
            ))}

            {!todosToRender.length && <EmptyTodos />}
          </div>
          <InfoPanel
            currentFilter={currentFilter}
            setCurrentFilter={setCurrentFilter}
            setTodos={TodosData.setTodos}
            todos={TodosData.todos}
          />
        </>
      )}
    </Transition>
  );
};

export default DropDownList;
