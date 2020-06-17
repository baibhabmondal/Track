import { Storage } from '@ionic/storage';
import { TaskServiceService } from './../../services/task-service.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CreateTaskPage } from './createTask/createTask.page';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit, AfterViewInit{

  sliderOptions = { pager: true, initialSlide: 1, autoHeight: true };

  tasks = [];
  constructor(public modalController: ModalController, private taskService: TaskServiceService, private storage: Storage) {}

  ngOnInit() {

  }

  ngAfterViewInit() {
    console.log("tab1");
    if (!this.taskService.loaded) {
      const taskSub = this.taskService.tasks$.subscribe(t => {
        console.log('inside sub: ', t);
        this.tasks = t.todo;
      });
    } else {
      this.tasks = this.taskService.toDoTasks();
    }
  }

  doReorder(ev: any) {

    // console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);
    this.taskService.reorderTodo(ev.detail.from, ev.detail.to);
    ev.detail.complete();
  }

  calc_progress(create, deadline) {
    let today = new Date().getTime();
    // let total = deadline.getTime() - create.getTime();
    let diff = deadline.getTime() - today;
    let days = diff / (1000 * 3600 * 24);
    if(days > 30 )
      return 1;
    else if (days > 15)
      return 0.75;
    else if (days > 7)
      return 0.5;
    else if (days > 3)
      return 0.25;
    else if ( days > 1)
      return 0.15;
    else return 0;
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
    this.taskService.tasks.todo.splice(index, 1);
  }
  
  moveTask(index) {
    this.taskService.moveToProgress(index);
    // event.stopPropagation();
  }
}
