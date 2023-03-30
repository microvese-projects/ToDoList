import status from './status.js';

class Overall {
  constructor(tasks) {
    this.tasks = tasks;
    this.listContainer = document.querySelector('#to-dos');
  }

  displayTasks() {
    this.tasks.forEach(({
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
        this.listContainer.innerHTML = '';
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
}

export default Overall;