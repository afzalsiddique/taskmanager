import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    axios.get('http://localhost:5000/api/tasks').then((response) => {
      setTasks(response.data);
    });
  };
  const handleMarkAsCompleted = (taskId) => {
    axios
      .put(`http://localhost:5000/api/tasks/${taskId}`, { status: 'completed' })
      .then((response) => {
        console.log('Task marked as completed:', response.data);
        fetchTasks(); // Refresh the task list after update
      })
      .catch((error) => {
        console.error('Error marking task as completed:', error);
      });
  };

  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <Link to={`/tasks/${task._id}`}>{task.title}</Link>
            {task.status==='ongoing' && (
              <button onClick={() => handleMarkAsCompleted(task._id)}>
                Mark as Completed
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
