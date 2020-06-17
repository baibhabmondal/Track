import { Storage } from '@ionic/storage';
import { TaskServiceService } from './../../services/task-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  tasks = [];
  sliderOptions = { pager: true, initialSlide: 0, autoHeight: true };
  constructor(private taskService: TaskServiceService, private storage: Storage) {}

  ngOnInit() {
    // const progress = await this.storage.get('progress');
    // if (progress != null) {
    //   this.taskService.progress = progress;
    // }
    this.tasks = this.taskService.inProgressTasks();
  }
  removeTask(index) {
    this.taskService.tasks.progress.splice(index, 1);
  }

  moveTask(index) {
    this.taskService.moveToDone(index);
  }

  doReorder(ev: any) {

    // console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);
    this.taskService.reorderProgress(ev.detail.from, ev.detail.to);
    ev.detail.complete();
  }

  calc_progress(create, deadline) {
    let today = new Date().getTime();
    // let total = deadline.getTime() - create.getTime();
    let diff = deadline.getTime() - today;
    let days = diff / (1000 * 3600 * 24);
    if (days > 30)
      return 1;
    else if (days > 15)
      return 0.75;
    else if (days > 7)
      return 0.5;
    else if (days > 3)
      return 0.25;
    else if (days > 1)
      return 0.15;
    else return 0;
  }
}
