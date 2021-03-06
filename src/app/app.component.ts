import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import {SplashScreen, Capacitor, Plugins} from '@capacitor/core'
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
   // private splashScreen: SplashScreen,
    //private statusBar: StatusBar,
    private authServiceObj: AuthService,
    private router:Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      if(Capacitor.isPluginAvailable('SplashScreen')){
        Plugins.SplashScreen.hide();
      }
    });
  }

  logout(){
    this.authServiceObj.Logoff();
    this.router.navigateByUrl('/auth');
  }
}
