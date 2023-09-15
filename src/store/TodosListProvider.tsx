import { createContext, useState } from 'react';
import { ITodo } from '../types';

interface ITodosListProvider {
  children: React.ReactNode;
}

interface IDefaultValue {
  listVisible: boolean;
  setListVisible: React.Dispatch<React.SetStateAction<boolean>>;
  todos: Array<ITodo>;
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

const defaultValue: IDefaultValue = {
  listVisible: false,
  setListVisible: () => {},
  todos: [],
  setTodos: () => {},
};

export const TodosContext = createContext(defaultValue);

const TodosListProvider: React.FC<ITodosListProvider> = ({ children }) => {
  const [listVisible, setListVisible] = useState<boolean>(false);
  const [todos, setTodos] = useState<Array<ITodo>>([
    { id: 1, value: 'sadas', isReady: true },
    { id: 2, value: '123123', isReady: true },
  ]);

  const contextData = {
    listVisible,
    setListVisible,
    todos,
    setTodos,
  };

  return (
    <TodosContext.Provider value={contextData}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosListProvider;
