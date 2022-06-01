class TaskStore {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem('taskstore')) || [];
  }

  addTask = (description, completed=false) => {
    this.tasks.push({description, completed, index: this.getTasks().length + 1 });
    this.populateLocalStorage();
  }

  getTasks = () => {
    return this.tasks;
  }

  printTodoList = () => {
    const listContainer = document.querySelector('.todo-list');
    listContainer.innerHTML = '';
    this.getTasks().forEach((todo) => {
      listContainer.innerHTML += `<li class='d-flex p-2'>
        <input type='checkbox' id=${todo.index} />
        <input type='text' class='desc font-normal px-1' value='${todo.description}' disabled/>
        <span class='fa fa-ellipsis-v fa-lg'></span>
      </li>`;
    });
  };

  populateLocalStorage = () => {
    localStorage.setItem('taskstore', JSON.stringify(this.getTasks()));
  }
}

export default TaskStore;