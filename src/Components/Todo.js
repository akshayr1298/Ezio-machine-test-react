import React, { useState } from "react";
import AddTodo from "./AddTodo/AddTodo";
import ListTodo from "./ListTodo/ListTodo";
import "./todo.css";
const Todo = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    const newTask = [...tasks, { title }];
    setTasks(newTask);
  };
  const removeTask = (index) => {
    const newTask = [...tasks];
    newTask.splice(index, 1);
    setTasks(newTask)
  };

  return (
    <>
      <div className="todo-contianer">
        <div className="header"> Todo App</div>
        <div className="add-todo">
          <AddTodo addTask={addTask} />
        </div>
        <div className="add-list">
          {tasks.map((task,index) => (
            <ListTodo task={task} index={index} removeTask={removeTask} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Todo;
