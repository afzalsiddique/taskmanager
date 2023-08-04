import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/tasks').then((response) => {
      setTasks(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <Link to={`/tasks/${task._id}`}>{task.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
