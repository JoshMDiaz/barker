import { Component } from '@angular/core';
import { NavController } from 'ionic-angular/navigation/nav-controller';

@Component({
  selector: 'back-button',
  templateUrl: 'back-button.html'
})
export class BackButtonComponent {

  constructor(private navCtrl: NavController) {
  }

  back() {
    this.navCtrl.pop();
  }

}
