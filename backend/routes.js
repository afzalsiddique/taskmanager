const express = require('express');
const router = express.Router();
const taskController = require('./controllers');

router.get('/tasks', taskController.getAllTasks);
router.get('/tasks/:id', taskController.getTaskById);
router.post('/tasks', taskController.createTask);
router.put('/tasks/:taskId', taskController.updateTaskStatus);

module.exports = router;
