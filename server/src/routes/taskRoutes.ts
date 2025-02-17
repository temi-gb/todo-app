import express from 'express';
import {
    getAllTasks,
    createTask,
    removeAllTasks,
    completeTask,
  } from '../controllers/taskController';

const router = express.Router();

router.get('/', getAllTasks);
router.put('/:id', completeTask);
router.post('/', createTask);
router.delete('/', removeAllTasks);

export default router;