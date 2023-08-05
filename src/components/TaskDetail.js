import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MarkAsCompleted from "./MarkAsCompleted";
import LoadingIcon from "./LoadingIcon";
import OverdueIcon from "./OverdueIcon";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const TaskDetail = ({ taskId }) => {
  const [task, setTask] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/tasks/${taskId}`).then((response) => {
      setTask(response.data);
    });
  }, [taskId, task]);

  if (!task) {
    return <LoadingIcon />
  }
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <span style={styles.title}>{task.title}</span>
          {<OverdueIcon task={task} style={styles.overdueIcon} />}
          <MarkAsCompleted task={task} style={styles.completedIcon} />
        </div>
        <p style={styles.description}>Description: {task.description}</p>
        <p style={styles.dueDate}>Due Date: {formatDate(task.dueDate)}</p>
        <p style={styles.status}>Status: {task.status} {task.status === 'completed' && <FontAwesomeIcon icon={faCheckCircle} style={styles.greenTickIcon} />}</p>
      </div>
    </div>
  );
};
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: '100vh',
    marginTop: '50px',
  },
  card: {
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    width: '100%',
    backgroundColor: '#fff',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    fontSize: '24px',
    marginRight: '10px',
    color: '#007bff',
  },
  overdueIcon: {
    fontSize: '20px',
    color: 'red',
    marginRight: '5px',
  },
  completedIcon: {
    fontSize: '20px',
    color: 'green',
    marginRight: '5px',
  },
  description: {
    fontSize: '16px',
    marginBottom: '10px',
  },
  dueDate: {
    fontSize: '16px',
    marginBottom: '10px',
  },
  status: {
    fontSize: '16px',
    marginBottom: '10px',
  },
    greenTickIcon: {
    fontSize: '20px',
    color: 'green',
    marginLeft: '5px',
  },
};

export default TaskDetail;
