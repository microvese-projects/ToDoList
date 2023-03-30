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
}

export default Overall;