import { useState, useEffect } from "react";
import { getTasks, completeTask, deleteAllTasks } from "../api/tasks";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  const handleComplete = async (id: number) => {
    await completeTask(id);
    loadTasks();
  };

  const handleDeleteAll = async () => {
    await deleteAllTasks();
    loadTasks();
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <ul className="task-list">
        {tasks.map((task) => (
          // <li key={task.id}>
          <li key={task.id} className={task.completed ? "completed" : ""}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleComplete(task.id)}
            />
            {task.title}
          </li>
        ))}
      </ul>
      <button onClick={handleDeleteAll}>Delete All</button>
    </div>
  );
};

export default TaskList;