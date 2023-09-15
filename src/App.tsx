import React, { useState } from 'react';
import TodoInput from './components/todo-input/todo-input';
import DropDownList from './components/drop-down-list/drop-down-list';
import { ITodo } from './types';
import s from './App.module.css';

const App: React.FC = () => {
  const [listVisible, setListVisible] = useState<boolean>(false);
  const [todos, setTodos] = useState<Array<ITodo>>([
    { id: 1, value: 'sadas', isReady: true },
    { id: 2, value: '123123', isReady: true },
  ]);

  return (
    <div className={s.container}>
      <h1 className={s.container_h1}>Todos</h1>
      <TodoInput setTodos={setTodos} setListVisible={setListVisible} />
      <DropDownList
        listVisible={listVisible}
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
};

export default App;
