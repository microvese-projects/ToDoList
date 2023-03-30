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
  {
    description: 'Clean the house.',
    completed: false,
    index: 2,
  },
  {
    description: 'Submit the project.',
    completed: false,
    index: 3,
  },
];

const list = new Overall(tasks);

list.displayTasks();
