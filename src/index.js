import '@fortawesome/fontawesome-free/js/all.js';
import './style.css';

const todos = [
  {
    index: 1,
    description: 'Wash the dishes',
    completed: false,
  },
  {
    index: 2,
    description: 'complete todo list project',
    completed: false,
  },
  {
    index: 3,
    description: 'Attend football training',
    completed: false,
  },
  {
    index: 4,
    description: 'Wash utensils after football practice',
    completed: false,
  },
];

const printTodoList = () => {
  const listContainer = document.querySelector('.todo-list');
  todos.forEach((todo) => {
    listContainer.innerHTML += `<li class='d-flex p-2'>
      <input type='checkbox' id=${todo.index} />
      <input type='text' class='desc font-normal px-1' value='${todo.description}' disabled/>
      <span class='fa fa-ellipsis-v fa-lg'></span>
    </li>`;
  });
};
printTodoList();