import { useState } from 'react';
import { Input, Button, Space, message } from 'antd';
import { useTaskStore } from '../../../entities/task/model/useTaskStore';

export const AddTaskForm = () => {
  const [title, setTitle] = useState('');
  const addTask = useTaskStore((state) => state.addTask);

  const handleSubmit = () => {
    if (!title.trim()) {
      message.warning('Task title cannot be empty');
      return;
    }

    addTask(title);
    setTitle('');
    message.success('Task added');
  };

  return (
    <Space.Compact style={{ width: '100%', marginBottom: '1rem' }}>
      <Input
        placeholder='Add a new task...'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onPressEnter={handleSubmit}
      />
      <Button
        type='primary'
        onClick={handleSubmit}
      >
        Add
      </Button>
    </Space.Compact>
  );
};
