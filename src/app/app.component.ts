import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AnnouncementPage } from '../pages/announcement/announcement';
import { SettingPage } from '../pages/setting/setting';
import { HelpPage } from '../pages/help/help';
import { LoginPage } from '../pages/login/login';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any,active: boolean, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Dashboard', component: HomePage,active: true, icon: 'person' },
      { title: 'Announcement', component: AnnouncementPage, active: true,icon: 'list-box' },
      { title: 'Setting', component: SettingPage, active: true,icon: 'settings' },
      { title: 'Help', component: HelpPage,active: true, icon: 'flag' },
      { title: 'About', component: ListPage,active: true, icon: 'information-circle' },
      { title: 'Logout', component: ListPage,active: true, icon: 'log-out' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
