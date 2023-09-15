import React from 'react';
import TodoInput from './components/todo-input/todo-input';
import DropDownList from './components/drop-down-list/drop-down-list';
import TodosListProvider from './store/TodosListProvider';
import s from './App.module.css';

const App: React.FC = () => {
  return (
    <TodosListProvider>
      <div className={s.container}>
        <h1 className={s.container_h1}>Todos</h1>
        <TodoInput />
        <DropDownList />
      </div>
    </TodosListProvider>
  );
};

export default App;
