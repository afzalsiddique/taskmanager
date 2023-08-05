import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import MarkAsCompleted from './MarkAsCompleted';
import { isTaskOverdue } from '../HelperFunctions';

const TaskSummary = ({ task }) => {
  return (
    <li key={task._id} style={styles.taskItem}>
      <div style={styles.titleColumn}>
        <Link to={`/tasks/${task._id}`} style={styles.taskLink}>
          {task.title}
        </Link>
      </div>
      <div style={styles.iconColumn}>
        {isTaskOverdue(task) && <FontAwesomeIcon icon={faClock} style={styles.overdueIcon} />}
      </div>
      <div style={styles.completeColumn}>
        <MarkAsCompleted task={task} />
      </div>
    </li>
  );
};

const styles = {
  taskItem: {
    display: 'grid',
    gridTemplateColumns: '3fr 1fr 1fr', // Three columns
    alignItems: 'center', // Center vertically
    marginBottom: '10px',
    padding: '5px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  titleColumn: {
    marginRight: '10px',
    // overflow: 'hidden', // Truncate text if it overflows
    // textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  iconColumn: {
    display: 'flex',
    justifyContent: 'center', // Center horizontally
    marginRight: '10px',
  },
  completeColumn: {
    display: 'flex',
    justifyContent: 'flex-end', // Align to the right
  },
  taskLink: {
    textDecoration: 'none',
    color: '#007bff',
    fontWeight: 'bold',
  },
  overdueIcon: {
    color: 'red',
  },
};

export default TaskSummary;
