import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  tasks = [
    {
      date: '29 June',
      task: 'The main task.',
      desc: 'The description of the task.'
    },
    {
      date: '29 June',
      task: 'The main task 2.',
      desc: 'The description of the task.'
    },
    {
      date: '29 June',
      task: 'The main task 3.',
      desc: 'The description of the task.'
    },
  ];

  constructor() {}



}
