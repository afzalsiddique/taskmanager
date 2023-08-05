import React, { useState } from 'react';
import axios from 'axios';

const CreateTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/tasks', { title, description, dueDate })
      .then((response) => {
        console.log('Task created:', response.data);
        setTitle('');
        setDescription('');
        setDueDate('');
        setSuccessMessage('Task created successfully.');
        setErrorMessage('');
      })
      .catch((error) => {
        console.error('Error creating task:', error);
        setSuccessMessage('');
        setErrorMessage('Error creating task. Please try again.');
      });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Create Task</h1>
      {successMessage && <div style={styles.successMessage}>{successMessage}</div>}
      {errorMessage && <div style={styles.errorMessage}>{errorMessage}</div>}
      <form style={styles.form}>
        <input
          style={styles.input}
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          style={styles.input}
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          style={styles.input}
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <button type="button" style={styles.button} onClick={handleSubmit}>
          Create Task
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    margin: '0 200px', // Add margin on left and right sides
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  form: {
    display: 'grid',
    gridTemplateColumns: '1fr', // Single column layout
    gap: '10px',
  },
  input: {
    padding: '5px',
    fontSize: '16px',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  successMessage: {
    color: 'green',
    marginBottom: '10px',
  },
  errorMessage: {
    color: 'red',
    marginBottom: '10px',
  },
};

export default CreateTask;
