import React from "react";
import Task from "./task";


const Tasks = ({tasks}) => {
  return (
    <>
      {tasks.map((task, index) => (
        <Task key={index} task={task}  ></Task>
      ))}
    </>
  );
};

export default Tasks;
