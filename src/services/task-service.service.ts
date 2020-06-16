import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  todo = [
    {
      date: '29 June',
      task: 'The main task.',
      desc: 'The description of the task.'
    },
    {
      date: '29 June',
      task: 'The main task 2.',
      desc: 'The description of the task.'
    },
    {
      date: '29 June',
      task: 'The main task 3.',
      desc: 'The description of the task.'
    },
  ];

  progress = [
    {
      date: '29 June',
      task: 'The main task.',
      desc: 'The description of the task.'
    },
    {
      date: '29 June',
      task: 'The main task 2.',
      desc: 'The description of the task.'
    },
    {
      date: '29 June',
      task: 'The main task 3.',
      desc: 'The description of the task.'
    },
  ];

  done = [
    {
      date: '29 June',
      task: 'The main task.',
      desc: 'The description of the task.'
    },
    {
      date: '29 June',
      task: 'The main task 2.',
      desc: 'The description of the task.'
    },
    {
      date: '29 June',
      task: 'The main task 3.',
      desc: 'The description of the task.'
    },
  ];

  constructor() { }

  toDoTasks() {
    return this.todo;
  }

  inProgressTasks() {
    return this.progress;
  }

  createTask(task) {
    // console.log(task);
    this.todo.push(task);
  }

  doneTasks() {
    return this.done;
  }

  moveToProgress(index) {
    let task = [];
    task = this.todo.splice(index, 1);
    this.progress.push(task[0]);
  }

  moveToDone(index) {
    let task = [];
    task = this.progress.splice(index, 1);
    this.done.push(task[0]);
  }

  reorderTodo(from, to) {
    let task = [];
    task = this.todo.splice(from, 1);
    this.todo.splice(to, 0, task[0]);
  }

  reorderProgress(from, to) {
    let task = [];
    task = this.progress.splice(from, 1);
    this.progress.splice(to, 0, task[0]);
  }

  reorderDone(from, to) {
    let task = [];
    task = this.done.splice(from, 1);
    this.done.splice(to, 0, task[0]);
  }
}
