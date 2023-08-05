import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MarkAsCompleted from "./MarkAsCompleted";
import LoadingIcon from "./LoadingIcon";

const TaskDetail = ({ taskId }) => {
  const [task, setTask] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/tasks/${taskId}`).then((response) => {
      setTask(response.data);
    });
  }, [taskId]);

  if (!task) {
    return <div><LoadingIcon/></div>
  }

  return (
    <div>
      <h1>Task Detail</h1>
      <h2>{task.title}</h2>
      <p>Description: {task.description}</p>
      <p>Due Date: {task.dueDate}</p>
      <p>Status: {task.status}</p>
      <MarkAsCompleted task={task}/>
    </div>
  );
};

export default TaskDetail;
