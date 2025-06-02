import { useEffect } from 'react';
import { useTaskStore } from '@/entities/task/model/useTaskStore';
import { AddTaskForm } from '@/features/add-task/ui/AddTaskForm';
import { TaskList } from '@/widgets/TaskList/ui/TaskList';

export const App = () => {
  const { tasks, setTasks } = useTaskStore();

  useEffect(() => {
    const saved = localStorage.getItem('tasks');
    if (saved) setTasks(JSON.parse(saved));
  }, [setTasks]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className='min-h-screen bg-gray-100 text-gray-900 p-4 font-sans'>
      <div className='max-w-xl mx-auto'>
        <h1 className='text-3xl font-bold mb-4 text-center'>📝 To-Do App</h1>
        <div className='flex justify-center w-96'>
          <div className='mx-auto'>
            <AddTaskForm />
            <TaskList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
