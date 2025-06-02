import { create, type StateCreator } from 'zustand';
import type { Task } from '../types/task';

type TaskStore = {
  tasks: Task[];
  addTask: (title: string) => void;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
  setTasks: (tasks: Task[]) => void;
};

const createTaskStore: StateCreator<TaskStore> = (set) => ({
  tasks: [],
  addTask: (title: string) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    };
    set((state) => ({ tasks: [...state.tasks, newTask] }));
  },
  toggleTask: (id: string) => {
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    }));
  },
  deleteTask: (id: string) => {
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    }));
  },
  setTasks: (tasks: Task[]) => set({ tasks }),
});

export const useTaskStore = create<TaskStore>(createTaskStore);
