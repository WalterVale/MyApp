import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
       url: '/folder/Home',
      icon: 'mail'
    },
    {
      title: 'Capital',
      url: '/folder/Capital',
      icon: 'paper-plane'
    },
    {
      title: 'Cachi',
      url: '/folder/Cachi',
      icon: 'heart'
    },
    {
      title: 'Cafayate',
      url: '/folder/Cafayate',
      icon: 'archive'
    },
    {
      title: 'San Carlos',
      url: '/folder/SanCarlos',
      icon: 'trash'
    },
    {
      title: 'Campo Quijano',
      url: '/folder/CampoQuijano',
      icon: 'warning'
    }
  ];
  public labels = ['Festivales', 'Gastronomia', 'Paisajes', 'Caminatas', 'Rios', 'Fauna'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
