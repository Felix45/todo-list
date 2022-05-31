import _ from 'lodash';
import printMe from './print.js';
import '@fortawesome/fontawesome-free/js/all'
import './style.css';

const todos = [
  {
    id: 1,
    description: "Wash the dishes",
    completed: false
  },
  {
    id: 2,
    description: "complete todo list project",
    completed: false
  },
  {
    id: 3,
    description: "Attend football training",
    completed: false
  },
  {
    id: 4,
    description: "Wash utensils after football practice",
    completed: false
  },
];

const printTodoList = () => {
  const listContainer = document.querySelector('.todo-list');
  todos.forEach((todo) => {
    listContainer.innerHTML += `<li class='d-flex p-2'>
      <input type='checkbox' id=${todo.id} />
      <label class='desc px-1' for=${todo.id}>${todo.description}</label>
      <span class='fa fa-ellipsis-v fa-lg'></span>
    </li>`;
  })
};
printTodoList();