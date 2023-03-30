import moreBtn from './moreBtn.js';

class Overall {
  constructor() {
    this.tasks = [];
    this.listContainer = document.querySelector('#to-dos');
    this.form = document.querySelector('form');
  }

  displayTasks() {
    this.listContainer.innerHTML = '';
    this.tasks.forEach(({
      description,
    }, i) => {
      this.tasks[i].index = i;
      const ul = document.createElement('li');
      ul.className = 'to-do-item';
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      const describe = document.createElement('p');
      describe.textContent = description;
      describe.ondblclick = this.more.bind(this);
      const more = moreBtn();
      more.onclick = this.more.bind(this);
      ul.appendChild(checkbox);
      ul.appendChild(describe);
      ul.appendChild(more);

      this.listContainer.appendChild(ul);
    });
  }

  add(text) {
    const newTask = {
      description: `${text}`,
      completed: false,
      index: this.tasks.length,
    };

    this.tasks.unshift(newTask);
    this.displayTasks();
  }

  remove(index) {
    this.tasks = this.tasks.filter((task) => task.index !== index);
    this.displayTasks();
  }

  more(e) {
    const target = e.target.parentNode.childNodes[1];
    this.edit(target);
  }

  edit(target) {
    let text = target.textContent;
    const editInput = document.createElement('input');
    editInput.setAttribute('type', 'text');
    editInput.value = text;
    editInput.className = 'editInput';
    target.parentNode.replaceChild(editInput, target);
    const more = editInput.parentNode.lastChild;
    const trash = document.createElement('i');
    trash.className = 'fa fa-trash trash';
    more.parentNode.replaceChild(trash, more);
    trash.addEventListener('click', (e) => {
      const tasks = document.querySelectorAll('li');
      tasks.forEach((task, index) => {
        if (task === e.target.parentNode) {
          this.remove(index);
        }
      });
    });

    editInput.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
        text = editInput.value;
        target.textContent = text;
        editInput.parentNode.replaceChild(target, editInput);
        const more = moreBtn();
        more.addEventListener('click', this.more.bind(this));
        trash.parentNode.replaceChild(more, trash);
      }
    });
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
  }
}

export default Overall;