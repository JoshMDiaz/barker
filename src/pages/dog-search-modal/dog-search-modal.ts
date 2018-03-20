import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";

@IonicPage()
@Component({
  selector: 'page-dog-search-modal',
  templateUrl: 'dog-search-modal.html',
})
export class DogSearchModalPage {
  dogs: Array<any>;
  breeds: Array<string>;
  eyeColors: Array<string>;
  filter: {
    breed: string,
    eyes: string,
    gender?: string
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, private http: Http) {
    this.filter = {
      breed: '',
      eyes: '',
    };
  }

  close() {
    // let data = { 'foo': 'bar' };
    this.viewCtrl.dismiss(/*data*/);
  }

  filterDogs(filter) {
    console.log(filter);

  }

  ionViewDidLoad() {
    this.dogs = this.navParams.data.dogs;
    this.http
      .get("/assets/data/breeds.json")
      .map(data => data.json())
      .subscribe(data => {
        this.breeds = data;
      });

    this.http
      .get("/assets/data/eye-colors.json")
      .map(data => data.json())
      .subscribe(data => {
        this.eyeColors = data;
      });
  }

}
