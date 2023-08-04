const express = require('express');
const router = express.Router();
const taskController = require('./controllers');

router.get('/tasks', taskController.getAllTasks);
router.get('/tasks/:id', taskController.getTaskById);
router.post('/tasks', taskController.createTask);

module.exports = router;
