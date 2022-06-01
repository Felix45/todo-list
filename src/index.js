import '@fortawesome/fontawesome-free/js/all.js';
import TaskStore from './taskStore.js';
import { returnIcon, addField, clearTodo, addBookHandler, removeBookHandler } from './domElement.js';
import './style.css';

const taskstore = new TaskStore();

window.addEventListener('load', taskstore.printTodoList);

returnIcon.addEventListener('click', () => { addBookHandler({ taskstore }); });

clearTodo.addEventListener('click', () => { removeBookHandler({ taskstore }) });

addField.addEventListener('keypress', (event) => { 
  if(event.key === 'Enter'){
    event.preventDefault();
    addBookHandler({taskstore}); 
  }
});