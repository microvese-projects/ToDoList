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

      this.listContainer.appendChild(ul);
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
  }
}

export default Overall;