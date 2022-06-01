import '@fortawesome/fontawesome-free/js/all.js';
import TaskStore from './taskStore.js';
import { returnIcon, addField, addBookHandler } from './domElement.js';
import './style.css';

const taskstore = new TaskStore();

window.addEventListener('load', taskstore.printTodoList);

returnIcon.addEventListener('click', () => { addBookHandler({ taskstore }); }, true);

addField.addEventListener('keypress', (event) => { 
  if(event.key === 'Enter'){
    event.preventDefault();
    addBookHandler({taskstore}); 
  }
});