import { TaskServiceService } from './../../services/task-service.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  tasks = [];
  sliderOptions = { pager: true, autoHeight: true };
  constructor(private taskService: TaskServiceService) {}

  ngOnInit() {
    this.tasks = this.taskService.doneTasks();
  }
  removeTask(index) {
    this.taskService.done.splice(index, 1);
  }

  doReorder(ev: any) {

    // console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);
    this.taskService.reorderDone(ev.detail.from, ev.detail.to);
    ev.detail.complete();
  }
}
