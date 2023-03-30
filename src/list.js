import status from './status.js';
import clearAll from './clearAll.js';

class Overall {
  constructor() {
    this.tasks = [];
    this.listContainer = document.querySelector('#to-dos');
    this.form = document.querySelector('form');
    this.clearAllBtn = document.querySelector('#clear-all');
  }

  displayTasks() {
    this.listContainer.innerHTML = '';
    this.tasks?.forEach(({
      description, completed, index,
    }) => {
      const ul = document.createElement('li');
      ul.className = 'to-do-item';
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      if (completed === true) {
        checkbox.checked = true;
      }
      checkbox.addEventListener('change', () => {
        const response = status(this.tasks, index);
        this.tasks = response;
        this.displayTasks();
      });
      const describe = document.createElement('p');
      describe.textContent = description;
      describe.ondblclick = this.edit;
      if (completed === true) {
        describe.className = 'strike';
      }
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

      this.listContainer.appendChild(ul);
    });
  }

  edit() {
    const target = this;
    let text = this.textContent;
    const editInput = document.createElement('input');
    editInput.setAttribute('type', 'text');
    editInput.value = text;
    editInput.className = 'editInput';
    target.parentNode.replaceChild(editInput, target);

    editInput.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
        text = editInput.value;
        this.textContent = text;
        editInput.parentNode.replaceChild(this, editInput);
      }
    });
  }

  add(text) {
    function generateId() {
      return Math.floor(Math.random() * 10000);
    }

    const newId = generateId();
    const newTask = {
      description: `${text}`,
      completed: false,
      index: newId,
    };

    this.tasks.push(newTask);
    this.displayTasks();
  }

  eventListeners() {
    this.form.addEventListener('submit', (event) => {
      event.preventDefault();
      const input = this.form.lastElementChild;
      input.addEventListener('keyup', (e) => {
        const text = input.value;
        if (e.key === 'Enter' && text !== '') {
          this.add(text);
          this.form.reset();
        }
      });
    });
    this.clearAllBtn.addEventListener('click', () => {
      this.tasks = clearAll(this.tasks);
      this.displayTasks();
    });
  }
}

export default Overall;