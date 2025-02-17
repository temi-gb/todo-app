import { Request, Response } from 'express';
import { getAllTasks, createTask, removeAllTasks, completeTask } from '../../src/controllers/taskController';
import { getTasks, addTask, deleteAllTasks } from '../../src/models/taskModels';

describe('Task Controller', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;

  beforeEach(() => {
    req = {};
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
      send: jest.fn(),
    };
    jest.clearAllMocks();
    deleteAllTasks();
  });

  test('getAllTasks should return all tasks', () => {
    addTask('Buy groceries');
    addTask('Walk the dog');

    getAllTasks(req as Request, res as Response);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(getTasks());
  });

  test('createTask should add a new task', () => {
    req.body = { title: 'Buy groceries' };

    createTask(req as Request, res as Response);

    expect(res.status).toHaveBeenCalledWith(201);
  });

  test('createTask should handle EmptyInputFieldsError', () => {
    req.body = { title: '' };

    createTask(req as Request, res as Response);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ message: 'Input fields cannot be empty' });
  });

  test('removeAllTasks should delete all tasks', () => {
    addTask('Buy groceries');
    addTask('Walk the dog');

    removeAllTasks(req as Request, res as Response);

    expect(res.status).toHaveBeenCalledWith(204);
    expect(getTasks()).toEqual([]);
  });

  test('completeTask should handle InvalidInputError', () => {
    req.params = { id: '999' };

    completeTask(req as Request, res as Response);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ message: 'Invalid input' });
  });
});