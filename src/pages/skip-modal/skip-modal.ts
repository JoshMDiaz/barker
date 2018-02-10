import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';

@IonicPage()
@Component({
  selector: 'page-skip-modal',
  templateUrl: 'skip-modal.html',
})
export class SkipModalPage {
  uid: string;
  email: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  goToCreateProfile() {
    this.navCtrl.setRoot("CreateProfilePage", {
      email: this.email,
      uid: this.uid
    });
  }

  goToSetupDogsProfile() {
    this.navCtrl.setRoot("CreateDogsProfilePage", {
      email: this.email,
      uid: this.uid
    });
  }

  ionViewDidLoad() {
    this.uid = this.navParams.data.uid;
    this.email = this.navParams.data.email;
  }

}
