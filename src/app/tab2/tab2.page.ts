import { TaskServiceService } from './../../services/task-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  tasks = [];

  constructor(private taskService: TaskServiceService) {}
  
  ngOnInit() {
    this.tasks = this.taskService.inProgressTasks();
  }
  removeTask(index) {
    this.taskService.progress.splice(index, 1);
  }

  moveTask(index) {
    this.taskService.moveToDone(index);
  }
}
