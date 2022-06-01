const form = document.forms[0];
const addField = form.elements.todo;
const returnIcon = document.querySelector('.fa-level-down');
const clearTodo = document.querySelector('.clear');

const addBookHandler = ({ taskstore }) => {
  if (addField.value !== '') {
    taskstore.addTask(addField.value);
    taskstore.printTodoList();
    form.reset();
  }
};

const removeBookHandler = ({ taskstore }) => {
  taskstore.removeTask(true);
};

export {
  addField, clearTodo, returnIcon, addBookHandler, removeBookHandler,
};