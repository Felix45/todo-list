/**
 * @jest-environment jsdom
 */

import TaskStore from '../taskStore.js';

const taskstore = new TaskStore();
describe('Todo list addItem tests', () => {
  document.body.innerHTML = '<div><ul class="todo-list"></ul></div>';

  test('add Item I', () => {
    taskstore.addTask('play football');
    const list = document.querySelectorAll('.todo-list li');
    expect(list).toHaveLength(1);
  });

  test('add Item II', () => {
    taskstore.addTask('play tennis');
    const list = document.querySelectorAll('.todo-list li');
    expect(list).toHaveLength(2);
  });

  test('add Item III', () => {
    taskstore.addTask('Watch fally ipupa concert');
    const list = document.querySelectorAll('.todo-list li');
    expect(list).toHaveLength(3);
  });
});

describe('Todo list removeItem tests', () => {
  test('remove Item III', () => {
    taskstore.removeTask(false, 3);
    const list = document.querySelectorAll('.todo-list li');
    expect(list).toHaveLength(2);
  });
  test('remove Item I', () => {
    taskstore.removeTask(false, 1);
    const list = document.querySelectorAll('.todo-list li');
    expect(list).toHaveLength(1);
  });
  test('remove remaining Item', () => {
    taskstore.removeTask(false, 1);
    const list = document.querySelectorAll('.todo-list li');
    expect(list).toHaveLength(0);
  });
});
