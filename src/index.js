import Overall from './list.js';
import './style.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const tasks = [
  {
    description: 'Take out trash.',
    completed: false,
    index: 0,
  },
  {
    description: 'Cook lunch.',
    completed: false,
    index: 1,
  },
];

const list = new Overall(tasks);

list.eventListeners();
list.displayTasks();
