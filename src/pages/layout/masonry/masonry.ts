import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController  } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import 'rxjs/add/operator/map'; // you might need to import this, or not depends on your setup

@IonicPage()
@Component({
  selector: 'page-masonry',
  templateUrl: 'masonry.html'
})
export class MasonryPage {
  loaded: boolean ;
  masonry: FirebaseListObservable<any[]>;
  masonryArray: any=[]; 

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public modalCtrl: ModalController, public afDB: AngularFireDatabase ) {
        let loadingPopup = this.loadingCtrl.create({
          spinner: 'crescent', 
          content: ''
        });
        loadingPopup.present();
        this.masonry = afDB.list('/masonry');
        this.masonry.subscribe(() => loadingPopup.dismiss());
  }



}
