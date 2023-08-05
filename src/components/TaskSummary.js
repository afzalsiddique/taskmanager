import React from 'react';
import {Link} from "react-router-dom";
import MarkAsCompleted from "./MarkAsCompleted";
import {isTaskOverdue} from "../HelperFunctions";

const TaskSummary = ({task}) => {
  return (
    <>
      <li key={task._id} style={styles.taskItem}>
        <Link to={`/tasks/${task._id}`} style={styles.taskLink}>
          {task.title}
        </Link>
        <MarkAsCompleted task={task} />
        {isTaskOverdue(task) && <span style={styles.overdueText}> Overdue</span>}
      </li>
    </>
  )
}
const styles = {
  taskItem: {
    marginBottom: '10px',
  },
  taskLink: {
    marginRight: '10px',
    textDecoration: 'none',
    color: '#007bff',
    fontWeight: 'bold',
  },
  overdueText: {
    color: 'red',
  },
};
export default TaskSummary;
