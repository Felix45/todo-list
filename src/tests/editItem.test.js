/**
 * @jest-environment jsdom
 */

import TaskStore from '../taskStore.js';

const taskstore = new TaskStore();
document.body.innerHTML = '<div><ul class="todo-list"></ul></div>';

describe('edit method test', () => {
  test('edit task', () => {
    taskstore.addTask('play football');
    taskstore.addTask('watch movies');

    const list = document.querySelectorAll('.todo-list li');

    expect(list).toHaveLength(2);

    taskstore.editTask({ id: 1, data: 'play chess' });
    const taskOne = document.querySelectorAll('.todo-list li input[type=text]')[0].value;

    taskstore.editTask({ id: 2, data: 'go shopping' });
    const taskTwo = document.querySelectorAll('.todo-list li input[type=text]')[1].value;

    expect(taskOne).toBe('play chess');
    expect(taskTwo).toBe('go shopping');
  });
});

describe('set completed status', () => {
  test('test mark completed', () => {
    taskstore.setTaskStaus(0);
    taskstore.setTaskStaus(1);
    taskstore.printTodoList();

    const statusOne = document.querySelectorAll('.todo-list li input[type=checkbox]')[0].checked;
    const statusTwo = document.querySelectorAll('.todo-list li input[type=checkbox]')[1].checked;

    expect(statusOne).toBe(true);
    expect(statusTwo).toBe(true);
  });
});

describe('clear completed tasks', () => {
  test('clear all todos', () => {
    taskstore.removeTask(true, -1);
    let list = document.querySelectorAll('.todo-list li');
    expect(list).toHaveLength(0);
    taskstore.addTask('go swimming');
    taskstore.addTask('go hiking');
    taskstore.addTask('prepare dinner');
    taskstore.setTaskStaus(0);
    taskstore.setTaskStaus(1);
    taskstore.setTaskStaus(2);
    taskstore.removeTask(true, -1);
    list = document.querySelectorAll('.todo-list li');
    expect(list).toHaveLength(0);
  });
});