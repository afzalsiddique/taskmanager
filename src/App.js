import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import TasksPage from './pages/TasksPage';
import TaskDetailPage from './pages/TaskDetailPage';
import CreateTaskPage from './pages/CreateTaskPage';

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Tasks</Link>
          </li>
          <li>
            <Link to="/create">Create Task</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<TasksPage />} />
        <Route path="/create" element={<CreateTaskPage />} />
        <Route path="/tasks/:taskId" element={<TaskDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
