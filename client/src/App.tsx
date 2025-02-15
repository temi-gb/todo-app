import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { useState } from "react";
import './index.css';

const App = () => {
  const [updateTrigger, setUpdateTrigger] = useState(false);

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <TaskForm onTaskAdded={() => setUpdateTrigger((prev) => !prev)} />
      <TaskList key={updateTrigger.toString()} />
    </div>
  );
};

export default App;
