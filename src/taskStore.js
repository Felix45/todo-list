import Helper from './helperFuncs.js';

class TaskStore {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem('taskstore')) || [];
  }

  addTask = (description, completed = false) => {
    this.tasks.push({ description, completed, index: this.getTasks().length + 1 });
    this.populateLocalStorage();
  }

  removeTask = (clear = false, itemIndex = -1) => {
    if (clear) {
      this.tasks = this.getTasks().filter((task) => task.completed === false);
    }
    if (itemIndex > 0) this.tasks.splice(itemIndex - 1, 1);

    this.regenerateTaskIds();
    this.populateLocalStorage();
    this.printTodoList();
  }

  editTask = ({ id, data }) => {
    this.tasks = this.getTasks().map((task) => {
      if (task.index === id && data !== '') task.description = data;
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
    if (this.tasks[updateIndex].completed) {
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
        <input type='checkbox' id=${todo.index} ${todo.completed ? 'checked' : ''}/>
        <input type='text' class='desc font-normal px-1 ${todo.completed ? 'line-through' : ''}' data-pos='${todo.index}' 
        value='${todo.description}' disabled/>
        <span class='edit-desc fa fa-ellipsis-v'></span>
        <span class='d-none fa fa-trash mx-1 btnDelete' data-index=${todo.index}></span>
      </li>`;
    });

    if (this.getTasks().length > 0) {
      Helper.checkBoxHandler(this);
      Helper.deleteButtonsHandler(this);
      Helper.editElipsisHandler(this);
      Helper.editTextHandler();
    }
  }

  populateLocalStorage = () => {
    localStorage.setItem('taskstore', JSON.stringify(this.getTasks()));
  }
}

export default TaskStore;