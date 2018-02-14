import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { AuthData } from '../../providers/auth-data';

@IonicPage()
@Component({
  selector: 'page-skip-modal',
  templateUrl: 'skip-modal.html',
})
export class SkipModalPage {
  uid: string;
  email: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private authData: AuthData) {
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  goToCreateProfile() {
    this.authData.setUserProfileField(
      this.uid,
      'introCompleted',
      true
    );
    this.navCtrl.setRoot("CreateProfilePage", {
      email: this.email,
      uid: this.uid
    });
  }

  goToSetupDogsProfile() {
    this.authData.setUserProfileField(
      this.uid,
      'introCompleted',
      true
    );
    this.navCtrl.setRoot("CreateDogsProfilePage", {
      email: this.email,
      uid: this.uid
    });
  }

  ionViewDidLoad() {
    this.uid = this.navParams.data.uid;
    this.email = this.navParams.data.email;
    console.log(this.uid, this.email);

  }

}
