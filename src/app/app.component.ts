import { TaskServiceService } from './../services/task-service.service';
import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements AfterViewInit, OnDestroy, OnInit {

  backButtonSubscription;
  pauseSubscription;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    private taskService: TaskServiceService
  ) {
    this.initializeApp();
  }

  ngOnInit() {
    this.taskService.getData();
  }

  ngAfterViewInit() {
    this.backButtonSubscription = this.platform.backButton.subscribe(() => {
      this.taskService.save();
      navigator['app'].exitApp();
    });

    this.pauseSubscription = this.platform.pause.subscribe(() => {
      this.taskService.save();
    });

    window.addEventListener('beforeunload', () => {
      this.taskService.save();
    });
  }

  ngOnDestroy() {
    this.backButtonSubscription.unsubscribe();
    this.pauseSubscription.unsubscribe();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  
}
