import React, { useState } from 'react';
import axios from 'axios';

const CreateTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/tasks', { title, description, dueDate })
      .then((response) => {
        console.log('Task created:', response.data);
        setTitle('');
        setDescription('');
        setDueDate('');
      })
      .catch((error) => {
        console.error('Error creating task:', error);
      });
  };

  return (
    <div>
      <h1>Create Task</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) =>{
             setTitle(e.target.value)
            console.log(title)
          }}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          // type="date"
          type="text"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <button type="submit">Create Task</button>
      </form>
    </div>
  );
};

export default CreateTask;
