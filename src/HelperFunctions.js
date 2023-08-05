const isTaskOverdue = (task) => {
  if (task.status === 'completed') return false;
  const dueDate = task.dueDate;
  const currentDate = new Date();
  return currentDate > new Date(dueDate);
};

module.exports={isTaskOverdue}
