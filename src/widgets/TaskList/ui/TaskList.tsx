import { List, Empty } from 'antd';
import { useTaskStore } from '@/entities/task/model/useTaskStore';
import { TaskItem } from '@/entities/task/ui/TaskItem';

export const TaskList = () => {
  const tasks = useTaskStore((state) => state.tasks);

  if (tasks.length === 0) {
    return <Empty description='No tasks yet' />;
  }

  return (
    <List
      dataSource={tasks}
      renderItem={(task) => <TaskItem task={task} />}
      bordered
      style={{ background: 'white', borderRadius: 8 }}
    />
  );
};
