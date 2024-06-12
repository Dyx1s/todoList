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
  
  return (
    <div>
      <h3>{title}</h3>
      <div>
      <input 
        value={newTaskTitle} 
        onChange={(e) => setNewTaskTitle(e.currentTarget.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            addTask(newTaskTitle);
            setNewTaskTitle("");
          }
        }}
        type="text" />
        <button onClick={() => {
            addTask(newTaskTitle);
            setNewTaskTitle("")
          }}>Add</button>
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