import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LoadingIcon from './LoadingIcon';
import TaskSummary from './TaskSummary';
import { isTaskOverdue } from '../HelperFunctions';
import ErrorMessage from "./ErrorMessage";
import SuccessMessage from "./SuccessMessage";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetchTasks();
  }, [tasks, selectedFilter]);

  const fetchTasks = () => {
    axios.get('http://localhost:5000/api/tasks')
      .then((response) => {
      setTasks(response.data);
      setErrorMessage('');
    })
      .catch((error)=>{
        console.error('Error fetching tasks:', error);
        setErrorMessage("Can't Load Task. Try again.");
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

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Task List</h1>
      <div style={styles.filterButtons}>
        <button
          style={selectedFilter === 'all' ? styles.selectedFilterButton : styles.filterButton}
          onClick={() => setSelectedFilter('all')}
        >
          All Tasks
        </button>
        <button
          style={selectedFilter === 'overdue' ? styles.selectedFilterButton : styles.filterButton}
          onClick={() => setSelectedFilter('overdue')}
        >
          Overdue
        </button>
        <button
          style={selectedFilter === 'completed' ? styles.selectedFilterButton : styles.filterButton}
          onClick={() => setSelectedFilter('completed')}
        >
          Completed
        </button>
        <button
          style={selectedFilter === 'ongoing' ? styles.selectedFilterButton : styles.filterButton}
          onClick={() => setSelectedFilter('ongoing')}
        >
          Ongoing
        </button>
      </div>
      <ul style={styles.taskList}>
        {tasks.length === 0 && errorMessage==='' &&
          <li style={styles.loadingItem}>
            <LoadingIcon />
          </li>}
        {errorMessage && <ErrorMessage message={errorMessage}/>}
        {filterTasks().length===0 && errorMessage==='' && <SuccessMessage message={"No items to show"}/> }
        { filterTasks().map((task) => <TaskSummary key={task._id} task={task} />) }
      </ul>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  filterButtons: {
    marginBottom: '20px',
  },
  filterButton: {
    marginRight: '10px',
    padding: '5px 10px',
    backgroundColor: '#eee',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  selectedFilterButton: {
    marginRight: '10px',
    padding: '5px 10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  taskList: {
    listStyle: 'none',
    padding: 0,
  },
  loadingItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50px',
    fontSize: '18px',
  },
};

export default TaskList;
