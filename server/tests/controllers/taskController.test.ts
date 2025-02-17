import {
    getTasks,
    addTask,
    deleteAllTasks,
    markTaskAsComplete,
  } from '../../src/models/taskModels';
import { EmptyInputFieldsError, InputAlreadyExistsError, InvalidInputError } from '../../src/errors/customErrors';

//This clears the task array before each test
describe('Task Model', () => {
beforeEach(() => {
    deleteAllTasks();
});

test('getTasks should return an empty array initially', () => {
    const tasks = getTasks();
    expect(tasks).toEqual([]);
});

test('addTask should add a new task', () => {
    const task = addTask('Buy groceries');
    expect(task).toEqual({ id: 1, title: 'Buy groceries', completed: false });
    expect(getTasks()).toHaveLength(1);
});

test('addTask should throw EmptyInputFieldsError if title is empty', () => {
    expect(() => addTask('')).toThrow(EmptyInputFieldsError);
});

test('addTask should throw InputAlreadyExistsError if title already exists', () => {
    addTask('Buy groceries');
    expect(() => addTask('Buy groceries')).toThrow(InputAlreadyExistsError);
});

test('deleteAllTasks should clear all tasks', () => {
    addTask('Buy groceries');
    addTask('Walk the dog');
    deleteAllTasks();
    expect(getTasks()).toEqual([]);
});

test('markTaskAsComplete should mark a task as completed', () => {
    const task = addTask('Buy groceries');
    const updatedTask = markTaskAsComplete(task.id);
    expect(updatedTask?.completed).toBe(true);
});

});