import TaskStore from './taskStore.js';
import {
  returnIcon, addField, clearTodo, addBookHandler, removeBookHandler,
} from './domElement.js';
import './style.css';

const taskstore = new TaskStore();

window.addEventListener('load', () => {
  taskstore.printTodoList();
  addField.focus();
});

returnIcon.addEventListener('click', () => {
  addBookHandler({ taskstore });
});

clearTodo.addEventListener('click', () => {
  removeBookHandler({ taskstore });
});

addField.addEventListener('keypress', (event) => {
  if (event.key === 'Enter' && event.target.value !== '') {
    event.preventDefault();
    addBookHandler({ taskstore });
  }
});
