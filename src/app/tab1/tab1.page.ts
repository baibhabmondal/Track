import { TaskServiceService } from './../../services/task-service.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CreateTaskPage } from './createTask/createTask.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  // minDate: String;
  
  tasks = [];
  constructor(public modalController: ModalController, private taskService: TaskServiceService) {}

  ngOnInit() {
    this.tasks = this.taskService.toDoTasks();
  }
  // minDateStr() {
  //   let d = new Date();
  //   console.log(d);
  //   let month = d.getMonth() + 1;
  //   let year = d.getFullYear();
  //   let day = d.getDate() - 1;
  //   let dayStr = "" + day;
  //   let monthStr = "" + month;
  //   if (day < 10) {
  //     dayStr = '0' + dayStr;
  //   }
  //   if (month < 10) {
  //     monthStr = '0' + monthStr;
  //   }
  //   let dateStr = "" + year + "-" + monthStr + "-" + dayStr;
  //   console.log(dateStr)
  //   this.minDate = dateStr;
  // }

  async presentModal() {
    // this.minDateStr();
    const modal = await this.modalController.create({
      component: CreateTaskPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  removeTask(index) {
    this.taskService.todo.splice(index, 1);
  }
  
  moveTask(index) {
    this.taskService.moveToProgress(index);
  }
}
