import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-looking-for-breeding',
  templateUrl: 'looking-for-breeding.html',
})
export class LookingForBreedingPage {
  dogs: Array<any>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
  }

  goToFeed(dog, searchType) {
    this.navCtrl.push("DogSearchPage", { dog: dog, searchType: searchType, uid: this.navParams.data.uid });
  }

  ionViewDidLoad() {
    this.dogs = this.navParams.data.dogs;
  }

}
