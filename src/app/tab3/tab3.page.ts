import { TaskServiceService } from './../../services/task-service.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  tasks = [];
  constructor(private taskService: TaskServiceService) {}

  ngOnInit() {
    this.tasks = this.taskService.doneTasks();
  }
  removeTask(index) {
    this.taskService.done.splice(index, 1);
  }

}
