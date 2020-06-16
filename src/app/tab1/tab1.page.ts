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

  sliderOptions = { pager: true, autoHeight: true };

  tasks = [];
  constructor(public modalController: ModalController, private taskService: TaskServiceService) {}

  ngOnInit() {
    this.tasks = this.taskService.toDoTasks();
  }
  doReorder(ev: any) {

    // console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);
    this.taskService.reorderTodo(ev.detail.from, ev.detail.to);
    ev.detail.complete();
  }



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
    console.log("called")
    this.taskService.moveToProgress(index);
    // event.stopPropagation();
  }
}
