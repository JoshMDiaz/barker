import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, LoadingController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';


@IonicPage()
@Component({
  selector: 'page-radio-list',
  templateUrl: 'radio-list.html'
})
export class RadioListPage {

  radioList: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController,public loadingCtrl: LoadingController , public afDB: AngularFireDatabase) {

    let loadingPopup = this.loadingCtrl.create({
      spinner: 'crescent', 
      content: ''
    });
    loadingPopup.present();

    this.radioList = afDB.list('/radio');
    this.radioList.subscribe(() => loadingPopup.dismiss());
  }

  openPlayer(radioId) {
    let profileModal = this.modalCtrl.create('RadioPage', { 
      radioId: radioId
    });
    profileModal.present();
  }
}
