const Task = require('./models');

// Get all tasks
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Get task by ID
const getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Create a new task
const createTask = async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
// update task status
const updateTaskStatus = async (req, res) => {
  const { taskId } = req.params;
  const { status } = req.body;

  try {
    const updatedTask = await Task.findByIdAndUpdate(
      taskId,
      { status },
      { new: true } // Return the updated task
    );

    if (!updatedTask) {
      return res.status(404).json({ error: 'Task not found' });
    }

    return res.json(updatedTask);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
};
module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTaskStatus,
};
