
import axios from 'axios';

const API_URL = "http://localhost:3000/tasks";

export const getTasks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addTask = async (title: string) => {
  const response = await axios.post(API_URL, { title });
  return response.data;
};

export const completeTask = async (id: number) => {
  const response = await axios.put(`${API_URL}/${id}`);
  return response.data;
};

export const deleteAllTasks = async () => {
  const response = await axios.delete(API_URL);
  return response.data;
};