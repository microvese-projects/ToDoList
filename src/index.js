import './style.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

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

function displayTasks() {
  tasks.forEach(({
    description,
  }) => {
    const ul = document.createElement('li');
    ul.className = 'to-do-item';
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    const describe = document.createElement('p');
    describe.textContent = description;
    const more = document.createElement('div');
    more.className = 'more';
    const box = document.createElement('div');
    const box1 = document.createElement('div');
    const box2 = document.createElement('div');
    box.className = 'box';
    box1.className = 'box';
    box2.className = 'box';
    more.appendChild(box);
    more.appendChild(box1);
    more.appendChild(box2);
    ul.appendChild(checkbox);
    ul.appendChild(describe);
    ul.appendChild(more);

    document.querySelector('#to-dos').appendChild(ul);
  });
}

displayTasks();
