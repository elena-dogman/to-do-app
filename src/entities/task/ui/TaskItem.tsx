import { useState } from 'react';
import { Input, List, Typography, Button } from 'antd';
import { DeleteOutlined, CheckOutlined, EditOutlined } from '@ant-design/icons';
import type { Task } from '../types/task';
import { useTaskStore } from '../model/useTaskStore';

type Props = {
  task: Task;
};

export const TaskItem = ({ task }: Props) => {
  const { toggleTask, deleteTask } = useTaskStore();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const saveEdit = () => {
    if (!editedTitle.trim()) return;
    useTaskStore.setState((state) => ({
      tasks: state.tasks.map((t) =>
        t.id === task.id ? { ...t, title: editedTitle } : t,
      ),
    }));
    setIsEditing(false);
  };

  return (
    <List.Item
      style={{
        backgroundColor: task.completed ? '#f6ffed' : 'white',
        borderRadius: 8,
        padding: '12px 16px',
      }}
      actions={[
        <Button
          type='text'
          icon={<EditOutlined />}
          onClick={() => setIsEditing(true)}
        />,
        <Button
          type='text'
          danger
          icon={<DeleteOutlined />}
          onClick={() => deleteTask(task.id)}
        />,
      ]}
    >
      {isEditing ? (
        <Input
          autoFocus
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
          onPressEnter={saveEdit}
          onBlur={saveEdit}
          maxLength={100}
        />
      ) : (
        <Typography.Text
          onClick={() => toggleTask(task.id)}
          delete={task.completed}
          style={{
            cursor: 'pointer',
            color: task.completed ? '#999' : undefined,
          }}
        >
          {task.completed && <CheckOutlined style={{ marginRight: 8 }} />}
          {task.title}
        </Typography.Text>
      )}
    </List.Item>
  );
};
