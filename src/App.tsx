import React, { useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import { TaskType } from './TodoList';



export type FilterValuesType = "all" | "active" | "completed";


function App() {
  let initTasks: Array<TaskType> = [
    {id: 1, title: "CSS", isDone: true},
    {id: 2, title: "JS", isDone: true},
    {id: 3, title: "React", isDone: false},
    {id: 4, title: "Redux", isDone: false},
  ]

  const [tasks, setTasks] = useState<Array<TaskType>>(initTasks);
  const [filter, setFilter] = useState<FilterValuesType>("all");
 
  const changeFilter = (value: FilterValuesType) => {
    setFilter(value);
  }

  const removeTask = (id: number) => {
      let filteredTasks = tasks.filter(t => t.id !== id)
      setTasks(filteredTasks)
  }

  let tasksForTodoList = tasks;
  if (filter === 'completed') {
    tasksForTodoList = tasks.filter(t => t.isDone)
  }
  if (filter === 'active') {
    tasksForTodoList = tasks.filter(t => !t.isDone)
  }
  return (
    <div className="App">
      <TodoList title="What to learn"
        tasks={ tasksForTodoList }
        removeTask={ removeTask }
        changeFilter={ changeFilter }
      />
    </div>
  );
}


export default App;
