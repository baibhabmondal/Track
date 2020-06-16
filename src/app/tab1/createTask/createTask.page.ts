import { TaskServiceService } from './../../../services/task-service.service';
import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'createTaskPage',
  templateUrl: 'createTask.Page.html'
})
export class CreateTaskPage {

    task = '';
    desc = '';
    deadline = new Date();
    // @Input() minDate: String;

    constructor(public modalController: ModalController, private taskService: TaskServiceService) {}

  dismiss() {
      // using the injected ModalController this page
      // can "dismiss" itself and optionally pass back data
      this.modalController.dismiss({
          'dismissed': true
      });
  }

  changeTask(e) {
    //   console.log(e);
      this.task = e.target.value;
  }

  changeDesc(e) {
    //   console.log(e);
      this.desc = e.target.value;
  }

  changeDeadline(e) {
    console.log(e.detail.value);
    // this.deadline = (document.getElementById('deadline') as any).value
    this.deadline = new Date(e.detail.value);
    // console.log(this.deadline)
  }

  create() {
    let d = this.deadline;
    let opt = {year: 'numeric', month: 'long', day: 'numeric'};
    let task = {};
    task['date'] = d.toLocaleDateString('en-US', opt);
    task['task'] = this.task;
    task['desc'] = this.desc;
    this.taskService.createTask(task);
    this.dismiss();
  }
}