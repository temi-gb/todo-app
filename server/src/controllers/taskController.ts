import { Request, Response, RequestHandler } from 'express';
import { getTasks, addTask, deleteAllTasks, markTaskAsComplete } from '../models/taskModels';
import { handleAPIError } from '../utils/errorHandler';

export const getAllTasks: RequestHandler = (req: Request, res: Response) => {
  try {
    const tasks = getTasks();
    res.status(200).json(tasks);
  } catch (error) {
    handleAPIError(res, error);
  }
};

export const createTask: RequestHandler = (req: Request, res: Response) => {
  try {
    const { title } = req.body;
    const newTask = addTask(title);
    res.status(201).json(newTask);
  } catch (error) {
    handleAPIError(res, error);
  }
};

export const removeAllTasks: RequestHandler = (req: Request, res: Response) => {
  try {
    deleteAllTasks();
    res.status(204).send();
  } catch (error) {
    handleAPIError(res, error);
  }
};

export const completeTask: RequestHandler = (req: Request, res: Response): void => {
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

