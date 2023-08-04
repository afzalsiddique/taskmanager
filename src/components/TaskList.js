import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MarkAsCompleted from "./MarkAsCompleted";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('all');

  useEffect(() => {
    fetchTasks();
  }, [tasks]);

  const fetchTasks = () => {
    axios.get('http://localhost:5000/api/tasks').then((response) => {
      setTasks(response.data);
    });
  };


  const filterTasks = () => {
    if (selectedFilter === 'all') {
      return tasks;
    } else if (selectedFilter === 'overdue') {
      return tasks.filter((task) => isTaskOverdue(task));
    } else {
      return tasks.filter((task) => task.status === selectedFilter);
    }
  };

  const isTaskOverdue = (task) => {
    if (task.status==='completed')
      return false
    const dueDate=task.dueDate;
    const currentDate = new Date();
    return currentDate > new Date(dueDate);
  };

  return (
    <div>
      <h1>Task List</h1>
      <div>
        <button onClick={() => setSelectedFilter('all')}>All Tasks</button>
        <button onClick={() => setSelectedFilter('overdue')}>Overdue</button>
        <button onClick={() => setSelectedFilter('completed')}>Completed</button>
        <button onClick={() => setSelectedFilter('ongoing')}>Ongoing</button>
      </div>
      <ul>
        {filterTasks().map((task) => (
          <li key={task._id}>
            <Link to={`/tasks/${task._id}`}>{task.title}</Link>
            {isTaskOverdue(task) && <span style={{ color: 'red' }}> - Overdue</span>}
            {/*{task.status === 'ongoing' && (*/}
            {/*  <button onClick={() => handleMarkAsCompleted(task._id)}>Mark as Completed</button>*/}
            {/*)}*/}
            <MarkAsCompleted task={task}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
