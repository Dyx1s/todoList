import React, { useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import { TaskType } from './TodoList';
import { v1 } from 'uuid';



export type FilterValuesType = "all" | "active" | "completed";


function App() {

  let [tasks, setTasks] = useState<Array<TaskType>>([
    {id: v1(), title: "CSS", isDone: true},
    {id: v1(), title: "JS", isDone: true},
    {id: v1(), title: "React", isDone: false},
    {id: v1(), title: "Redux", isDone: false},
  ]);
  const [filter, setFilter] = useState<FilterValuesType>("all");

  const removeTask = (id: string) => {
    let filteredTasks = tasks.filter(t => t.id !== id)
    setTasks(filteredTasks)
  }

  
  const addTask = (title: string) => {
    let newTask = {id: v1(), title: title, isDone: false}
    let newTasks = [newTask, ...tasks]
    setTasks(newTasks)
  }


  let tasksForTodoList = tasks;
  if (filter === 'completed') {
    tasksForTodoList = tasks.filter(t => t.isDone)
  }
  if (filter === 'active') {
    tasksForTodoList = tasks.filter(t => !t.isDone)
  }
 
  const changeFilter = (value: FilterValuesType) => {
    setFilter(value);
  }



  return (
    <div className="App">
      <TodoList title="What to learn"
        tasks={ tasksForTodoList }
        removeTask={ removeTask }
        changeFilter={ changeFilter }
        addTask={ addTask }
      />
    </div>
  );
}


export default App;
