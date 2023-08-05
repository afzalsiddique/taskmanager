import React from 'react';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const  MarkAsCompleted= ({task}) => {

  const handleMarkAsCompleted = (taskId) => {
    axios
      .put(`http://localhost:5000/api/tasks/${taskId}`, { status: 'completed' })
      .then((response) => {
        console.log('Task marked as completed:', response.data);
      })
      .catch((error) => {
        console.error('Error marking task as completed:', error);
      });
  };
  return (
    <>
      {task.status === 'ongoing' && (
        <button onClick={() => handleMarkAsCompleted(task._id)}> <FontAwesomeIcon icon={faCheck} /> </button>
      )}
    </>
  )
}

export default MarkAsCompleted;
