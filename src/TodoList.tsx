import React, { FC, ReactElement } from 'react';
import { FilterValuesType } from './App';

export interface TaskType {
  id: number;
  title: string;
  isDone: boolean;
}

interface TodoListProps {
  title: string;
  tasks: TaskType[];
  removeTask: (id: number) => void
  changeFilter: (value: FilterValuesType) => void
}

const TodoList: FC<TodoListProps> = ({ title, tasks, removeTask, changeFilter }): ReactElement => {

  
  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input type="text" />
        <button>Add</button>
        <ul>
          {tasks.map(({ id, title, isDone }) => (
            <li key={id}>
              <input type="checkbox" checked={isDone} />
              <span>{title}</span>
              <button onClick={() => removeTask(id)}>X</button>
            </li>
          ))}
        </ul>
        <div>
          <button onClick={() => changeFilter('all')}>All</button>
          <button onClick={() => changeFilter('active')}>Active</button>
          <button onClick={() => changeFilter('completed')}>Completed</button>
        </div>
      </div>
    </div>
  );
};

export default TodoList;