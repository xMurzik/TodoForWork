import React, { useState } from 'react';
import { Input } from 'antd';
import { AiOutlineDown } from 'react-icons/ai';
import { v4 } from 'uuid';
import { ITodo } from '../../types';
import s from './todo-inputs.module.css';

interface ITodoInputProps {
  setListVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

const TodoInput: React.FC<ITodoInputProps> = ({ setListVisible, setTodos }) => {
  const [value, setValue] = useState<string>('');

  const onClickEnter = () => {
    setTodos((prev) => [...prev, { id: v4(), isReady: false, value: value }]);
    setValue('');
  };

  return (
    <div className={s.contaierInput}>
      <Input
        className={s.input}
        onChange={(e) => setValue(e.target.value)}
        onPressEnter={onClickEnter}
        size="large"
        value={value}
        placeholder="What needs to be done?"
      />
      <AiOutlineDown
        className={s.icon}
        onClick={() => setListVisible((val) => !val)}
      />
    </div>
  );
};

export default TodoInput;
