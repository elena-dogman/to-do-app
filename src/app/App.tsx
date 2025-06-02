import { TaskItem } from '../entities/task/ui/TaskItem';

export const App = () => {
  return (
    <div className='min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-4'>
      <div className='max-w-xl mx-auto'>
        <h1 className='text-3xl font-bold mb-4 text-center'>📝 To-Do App</h1>
        <TaskItem
          task={{
            id: '1',
            title: 'bla bla bla',
            completed: false,
          }}
        />
      </div>
    </div>
  );
};

export default App;
