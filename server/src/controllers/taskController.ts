import { Request, Response } from 'express';
import { getTasks, addTask, deleteAllTasks, markTaskAsComplete } from '../models/taskModels';
import { handleAPIError } from '../utils/errorHandler';

export const getAllTasks = (req: Request, res: Response) => {
  try {
    const tasks = getTasks();
    res.status(200).json(tasks);
  } catch (error) {
    handleAPIError(res, error);
  }
};

export const createTask = (req: Request, res: Response) => {
  try {
    const { title } = req.body;
    const newTask = addTask(title);
    res.status(201).json(newTask);
  } catch (error) {
    handleAPIError(res, error);
  }
};

export const removeAllTasks = (req: Request, res: Response) => {
  try {
    deleteAllTasks();
    res.status(204).send();
  } catch (error) {
    handleAPIError(res, error);
  }
};

export const completeTask = (req: Request, res: Response): void => {
  try {
    const taskId = parseInt(req.params.id, 10);
    const updatedTask = markTaskAsComplete(taskId);
    if (!updatedTask) {
       res.status(404).json({ message: 'Task not found' });
       return;
    }
    res.status(200).json(updatedTask);
  } catch (error) {
    handleAPIError(res, error);
  }
};

