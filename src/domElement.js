const form = document.forms[0];
const addField = form.elements.todo;
const returnIcon = document.querySelector('.fa-level-down');
const clearTodo = document.querySelector('.clear');

const addBookHandler = ({ taskstore }) => {
  taskstore.addTask(addField.value);
  taskstore.printTodoList();
  form.reset();
};

const removeBookHandler = ({ taskstore }) => {
  const deleteItems = [];
  const checkBoxes = document.querySelectorAll('input[type=checkbox]:checked');
  checkBoxes.forEach((checkBox) => {
    deleteItems.push(parseInt(checkBox.id, 10));
  });
  taskstore.removeTask(deleteItems);
};

export {
  addField, clearTodo, returnIcon, addBookHandler, removeBookHandler,
};