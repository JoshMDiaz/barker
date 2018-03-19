import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-dog-search-modal',
  templateUrl: 'dog-search-modal.html',
})
export class DogSearchModalPage {
  dogs: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
  }

  close() {
    // let data = { 'foo': 'bar' };
    this.viewCtrl.dismiss(/*data*/);
  }

  ionViewDidLoad() {
    this.dogs = this.navParams.data.dogs;
  }

}
