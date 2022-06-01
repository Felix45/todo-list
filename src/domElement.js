const form = document.forms[0];
const addField = form.elements.todo;
const returnIcon = document.querySelector('.fa-level-down');

const addBookHandler = ({taskstore}) => {
  console.log('Logg...');
  taskstore.addTask(addField.value);
  taskstore.printTodoList();
  form.reset();
};

export { addField, addBookHandler, returnIcon };