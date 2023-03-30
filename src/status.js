function status(tasks, index) {
  tasks.map((each, i) => {
    if (each.index === index) {
      const target = tasks[i];
      if (target.completed === true) {
        target.completed = false;
      } else {
        target.completed = true;
      }
      return target;
    }
    return each;
  });
  return tasks;
}

export default status;