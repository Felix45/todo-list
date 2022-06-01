class TaskStore {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem('taskstore')) || [];
  }

  addTask = (description, completed = false) => {
    this.tasks.push({ description, completed, index: this.getTasks().length + 1 });
    this.populateLocalStorage();
  }

  removeTask = (clear = false, itemIndex = -1) => {
    
    if(clear) {
      this.tasks = this.getTasks().filter((task) => {
        return task.completed === false;
      });
    }
    if (itemIndex > 0) this.tasks.splice(itemIndex - 1, 1);

    this.regenerateTaskIds();
    this.populateLocalStorage();
    this.printTodoList();
  }

  editTask = ({ id, data }) => {
    this.tasks = this.getTasks().map((task) => {
      if (task.index === id) task.description = data;
      return task;
    });
    this.populateLocalStorage();
    this.printTodoList();
  }

  regenerateTaskIds = () => {
    this.tasks = this.getTasks().map((task, index) => {
      task.index = index + 1;
      return task;
    });
  }

  setTaskStaus = (updateIndex) => {
    if(this.tasks[updateIndex].completed) {
      this.tasks[updateIndex].completed = false;
    } else {
      this.tasks[updateIndex].completed = true;
    }
    this.populateLocalStorage();
  }

  getTasks = () => this.tasks

  printTodoList = () => {
    const listContainer = document.querySelector('.todo-list');
    listContainer.innerHTML = '';
    this.getTasks().forEach((todo) => {
      listContainer.innerHTML += `<li class='d-flex p-2'>
        <input type='checkbox' id=${todo.index} ${ todo.completed ? 'checked': ''}/>
        <input type='text' class='desc font-normal px-1 ${ todo.completed ? 'line-through': ''}' data-pos='${todo.index}' 
        value='${todo.description}' disabled/>
        <span class='edit-desc fa fa-ellipsis-v'></span>
        <span class='d-none fa fa-trash mx-1 btnDelete' data-index=${todo.index}></span>
      </li>`;
    });

    if (this.getTasks().length > 0) {
      const checkBox = document.querySelectorAll('input[type=checkbox]');
      checkBox.forEach((box) => {
        box.addEventListener('change', (event) => {
          const task = event.target.parentNode.querySelector('.desc');
          task.classList.toggle('line-through');
          this.setTaskStaus(parseInt(event.target.id) - 1);
        });
      });

      const btnDelete = document.querySelectorAll('.btnDelete');
      btnDelete.forEach((btn) => {
        btn.addEventListener('click', (event) => {
          this.removeTask(false, parseInt(event.target.getAttribute('data-index'), 10));
        });
      });

      const editFields = document.querySelectorAll('.desc');

      editFields.forEach((editField) => editField.addEventListener('keypress', (event) => {
        if (event.key === 'Enter' && event.target.value !== '') {
          event.preventDefault();
          const id = parseInt(event.target.getAttribute('data-pos'), 10);
          const data = event.target.value;
          this.editTask({ id, data });
          event.target.disabled = true;
          event.target.parentNode.querySelector('.edit-desc').classList.toggle('d-none');
        }
      }));

      const textFields = document.querySelectorAll('.edit-desc');

      textFields.forEach((editField) => {
        editField.addEventListener('click', (event) => {
          editFields.forEach((editField) => {
            editField.disabled = true;
            editField.parentNode.classList.remove('high-light');
            editField.parentNode.querySelector('.edit-desc').classList.remove('d-none');
            editField.parentNode.querySelector('.fa-trash').classList.add('d-none');
          });
          event.target.parentNode.classList.add('high-light');
          const task = event.target.parentNode.querySelector('.desc');
          const deleteButton = event.target.parentNode.querySelector('.fa-trash');
          task.disabled = false;
          task.focus();
          event.target.classList.toggle('d-none');
          deleteButton.classList.toggle('d-none');
        });
      });
    }
  }

  populateLocalStorage = () => {
    localStorage.setItem('taskstore', JSON.stringify(this.getTasks()));
  }
}

export default TaskStore;