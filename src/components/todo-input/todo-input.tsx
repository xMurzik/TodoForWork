import React, { useState, useContext } from 'react';
import { Input } from 'antd';
import { AiOutlineDown } from 'react-icons/ai';
import { v4 } from 'uuid';
import { TodosContext } from '../../store/TodosListProvider';
import s from './todo-inputs.module.css';

const TodoInput: React.FC = () => {
  const TodosData = useContext(TodosContext);

  const [value, setValue] = useState<string>('');

  const onClickEnter = () => {
    if (value) {
      TodosData.setTodos((prev) => [
        ...prev,
        { id: v4(), isReady: false, value: value },
      ]);
      setValue('');
    }
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
        onClick={() => TodosData.setListVisible((val) => !val)}
      />
    </div>
  );
};

export default TodoInput;
