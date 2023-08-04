import React from 'react';
import { useParams } from 'react-router-dom';
import TaskDetail from '../components/TaskDetail';

const TaskDetailPage = () => {
  const { taskId } = useParams();

  return (
    <div>
      <TaskDetail taskId={taskId} />
    </div>
  );
};

export default TaskDetailPage;
