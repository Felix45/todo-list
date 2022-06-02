class Drag {
    static dragListItem = () => {
      const todoList = document.querySelector('.todo-list');
      const draggable = document.querySelectorAll('.draggable');

      draggable.forEach((listItem) => {
        listItem.addEventListener('dragstart', () => {
          listItem.classList.add('dragging');
        });

        listItem.addEventListener('dragend', () => {
          listItem.classList.remove('dragging');
        });
      });

      todoList.addEventListener('dragover', (e) => {
        e.preventDefault();
        const draggedElement = document.querySelector('.dragging');
        const afterElement = Drag.getDragAfterElement(todoList, e.clientY);
        if (afterElement === null) {
          todoList.appendChild(afterElement);
        } else {
          todoList.insertBefore(draggedElement, afterElement);
        }
      });
    }

    static getDragAfterElement = (container, yPos) => {
      const draggables = [...container.querySelectorAll('.draggable:not(.dragging)')];

      return draggables.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = yPos - box.top - box.height / 2;

        if (offset < 0 && offset > closest.offset) {
          return { offset, element: child };
        }
        return closest;
      }, { offset: Number.NEGATIVE_INFINITY }).element;
    }
}

export default Drag;