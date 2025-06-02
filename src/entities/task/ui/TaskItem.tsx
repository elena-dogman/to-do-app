import type { Task } from '../types/task';
import { useTaskStore } from '../model/useTaskStore';
import { List, Typography, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

type Props = {
  task: Task;
};

export const TaskItem = ({ task }: Props) => {
  const toggle = useTaskStore((state) => state.toggleTask);
  const remove = useTaskStore((state) => state.deleteTask);

  return (
    <List.Item
      actions={[
        <Button
          type='text'
          danger
          icon={<DeleteOutlined />}
          onClick={() => remove(task.id)}
        />,
      ]}
    >
      <Typography.Text
        onClick={() => toggle(task.id)}
        delete={task.completed}
        style={{
          cursor: 'pointer',
          color: task.completed ? '#999' : 'inherit',
        }}
      >
        {task.title}
      </Typography.Text>
    </List.Item>
  );
};
