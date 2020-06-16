import { TaskServiceService } from './../../../services/task-service.service';
import { Component, Input } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'createTaskPage',
  templateUrl: 'createTask.Page.html'
})
export class CreateTaskPage {

    task = '';
    desc = '';
    deadline = new Date();
    // @Input() minDate: String;

    constructor(
      public modalController: ModalController,
      private taskService: TaskServiceService,
      public toastController: ToastController
    ) {}

  dismiss() {
      // using the injected ModalController this page
      // can "dismiss" itself and optionally pass back data
      this.modalController.dismiss({
          'dismissed': true
      });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Invalid Data. Please fill correctly.',
      duration: 2000
    });
    toast.present();
  }

  changeTask(e) {
    //   console.log(e);
      this.task = e.target.value;
  }

  changeDesc(e) {
    //   console.log(e);
      this.desc = e.target.value;
  }

  minDate() {
    let today = new Date();
    let day = today.getDate();
    let dayStr = "" + day;
    if (day < 10) {
      dayStr = '0' + dayStr;
    }
    let month = today.getMonth() + 1;
    let monthStr = "" + month;
    if (month < 10) {
      monthStr = '0' + monthStr;
    }
    let year = "" + today.getFullYear();
    let str = year + '-' + monthStr + '-' + dayStr;
    return str;
  }

  changeDeadline(e) {
    console.log(e.detail.value);
    // this.deadline = (document.getElementById('deadline') as any).value
    this.deadline = new Date(e.detail.value);
    // console.log(this.deadline)
  }

  create() {
    if(this.task.length == 0 || this.desc.length == 0)
    {
      this.presentToast();
      return;
    }
    let d = this.deadline;
    let opt = {year: 'numeric', month: 'long', day: 'numeric'};
    let task = {};
    task['dateStr'] = d.toLocaleDateString('en-US', opt);
    task['task'] = this.task;
    task['desc'] = this.desc;
    task['deadline'] = this.deadline;
    task['create_date'] = new Date();
    this.taskService.createTask(task);
    this.dismiss();
  }
}