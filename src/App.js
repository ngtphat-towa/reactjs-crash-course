import { useState } from "react";
import Header from "./components/header";
import Tasks from "./components/tasks";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Cooking dinner",
      day: "Feb 6th at 5:30pm",
      reminder: true,
    },
  ]);

  const deleteTask = (id) => {
    console.log("delete", id);
    setTasks(tasks.filter((task) => task.id !== id));
  };
  return (
    <div className="container">
      <Header></Header>
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} />
      ) : (
        "No task to shows"
      )}
    </div>
  );
};

export default App;
