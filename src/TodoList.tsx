import React, { FC, ReactElement, useState } from 'react';
import { FilterValuesType } from './App';

export interface TaskType {
  id: string;
  title: string;
  isDone: boolean;
}

interface TodoListProps {
  title: string;
  tasks: TaskType[];
  removeTask: (id: string) => void
  changeFilter: (value: FilterValuesType) => void
  addTask: (title: string) => void
}

const TodoList: FC<TodoListProps> = ({ title, tasks, removeTask, changeFilter, addTask }): ReactElement => {
  const [newTaskTitle, setNewTaskTitle] = useState<string>("")

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskTitle(e.currentTarget.value)
  }
  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTask(newTaskTitle);
      setNewTaskTitle("");
    }
  }
  const onClickButtonAdd = () => {
      addTask(newTaskTitle);
      setNewTaskTitle("")
  }
  const onAllClickHandler = () => changeFilter("all");
  const onActiveClickHandler = () => changeFilter("active");
  const onCompletedClickHandler = () => changeFilter("completed")

  return (
    <div>
      <h3>{title}</h3>
      <div>
      <input 
        value={newTaskTitle} 
        onChange={onChangeHandler}
        onKeyDown={onKeyDownHandler}
        type="text" />
        <button onClick={ onClickButtonAdd }>+</button>
        <ul>
          {tasks.map(({ id, title, isDone }) => (
            <li key={id}>
              <input
                type="checkbox" 
                checked={isDone} 
              />
              <span >{title}</span>
              <button onClick={() => removeTask(id)}>X</button>
            </li>
            ))
          }
        </ul>
        <div>
          <button onClick={onAllClickHandler}>All</button>
          <button onClick={onActiveClickHandler}>Active</button>
          <button onClick={onCompletedClickHandler}>Completed</button>
        </div>
      </div>
    </div>
  );
};

export default TodoList;