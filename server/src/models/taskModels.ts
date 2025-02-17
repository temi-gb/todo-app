import { EmptyInputFieldsError,  InputAlreadyExistsError, InvalidInputError } from '../errors/customErrors'

interface Task {
    id: number;
    title: string;
    completed: boolean;
  }

let tasks: Task[] = [];
let nextId = 1;

export const getTasks = (): Task[] => tasks;

export const addTask = (title: string): Task => {
  if (!title) {
    throw new EmptyInputFieldsError();
  }

  const existingTask = tasks.find((task) => task.title === title);
  if (existingTask) {
    throw new InputAlreadyExistsError();
  }

  const newTask: Task = { id: nextId++, title, completed: false };
  tasks.push(newTask);
  return newTask;
};

export const deleteAllTasks = (): void => {
  tasks = [];
};

export const markTaskAsComplete = (id: number): Task | undefined => {
  const task = tasks.find((task) => task.id === id);
  if (!task) {
    throw new InvalidInputError();
  }
  task.completed = true;
  return task;
};