import "./App.css";
import Task from "./components/Task";
import React, { useEffect, useState } from "react";
import CreateTask from "./components/CreateTask";

function App() {
  const [taskPending, setTaskPending] = useState(0);

  const [tasks, setTasks] = useState([
    { title: "Warm-up exercises", completed: true },
    { title: "Order Pizza", completed: false },
    { title: "Hang out with friends", completed: false },
  ]);

  useEffect(() => {
    setTaskPending(tasks.filter((item) => !item.completed).length);
  }, [tasks]);

  const taskCompleted = (index) => {
    let copyTasks = [...tasks];
    copyTasks[index].completed = true;
    setTasks(copyTasks);
    console.log(copyTasks);
  };
  console.log(tasks);

  const deleteTask = (index) => {
    const filteredTask = tasks.filter((item, ind) => index !== ind);
    setTasks(filteredTask);
  };
  const addTask = (title) => {
    const newTask = [...tasks, { title, completed: false }];
    setTasks(newTask);
  };
  return (
    <div className="App">
      <h1>TODO APP </h1>

      {tasks.map((task, index) => {
        return (
          <Task
            key={index}
            task={task}
            taskCompleted={taskCompleted}
            index={index}
            deleteTask={deleteTask}
          />
        );
      })}
      <CreateTask addTask={addTask} />
      <h2>Pending Tasks: {taskPending}</h2>
    </div>
  );
}

export default App;
