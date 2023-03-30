import './style.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Overall from './list.js';

const list = new Overall();
list.setLocalStorage();
list.displayTasks();
list.eventListeners();
