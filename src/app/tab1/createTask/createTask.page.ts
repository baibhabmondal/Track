import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'createTaskPage',
  templateUrl: 'createTask.Page.html'
})
export class CreateTaskPage {

    @Input() minDate: String;

    constructor(public modalController: ModalController) {}

  dismiss() {
      // using the injected ModalController this page
      // can "dismiss" itself and optionally pass back data
      this.modalController.dismiss({
          'dismissed': true
      });
  }

  

  create() {

  }
}