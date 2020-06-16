import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  
  tasks = {
    todo: [],
    progress: [],
    done: []
  };

  constructor(private storage: Storage) { }

  toDoTasks() {
    return this.tasks.todo;
  }

  inProgressTasks() {
    return this.tasks.progress;
  }

  createTask(task) {
    console.log(task);
    this.tasks.todo.push(task);
  }

  doneTasks() {
    return this.tasks.done;
  }

  moveToProgress(index) {
    let task = [];
    task = this.tasks.todo.splice(index, 1);
    this.tasks.progress.push(task[0]);
  }

  moveToDone(index) {
    let task = [];
    task = this.tasks.progress.splice(index, 1);
    this.tasks.done.push(task[0]);
  }

  reorderTodo(from, to) {
    let task = [];
    task = this.tasks.todo.splice(from, 1);
    this.tasks.todo.splice(to, 0, task[0]);
  }

  reorderProgress(from, to) {
    let task = [];
    task = this.tasks.progress.splice(from, 1);
    this.tasks.progress.splice(to, 0, task[0]);
  }

  reorderDone(from, to) {
    let task = [];
    task = this.tasks.done.splice(from, 1);
    this.tasks.done.splice(to, 0, task[0]);
  }

  save() {
    console.log(this.tasks)
    this.storage.set('tasks', this.tasks);
  }
}
