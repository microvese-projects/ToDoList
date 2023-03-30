import Overall from './list.js';
import './style.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import clearAll from './clearAll.js';

const clearAllBtn = document.querySelector('#clear-all');

const list = new Overall();

list.eventListeners();
list.displayTasks();
clearAllBtn.addEventListener('click', () => {
  list.tasks = clearAll(list.tasks);
  console.log(list.tasks)
  list.displayTasks();
});
