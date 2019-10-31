import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
import { User } from 'firebase';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isLogged: boolean

  constructor(
    private navCtrl: NavController,
    private authService: AuthenticationService,
  ) {
    this.isLogged = false
  }

  gotoLogin() {
    this.navCtrl.navigateForward('/register')
    this.isLogged = true
  }

  gotoLogoff() {
    this.authService.logoutUsuario()
    this.navCtrl.navigateForward('/home')
    this.isLogged = false
  }
}
