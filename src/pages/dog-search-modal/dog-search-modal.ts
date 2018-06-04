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
  ages: Array<number>;
  searchType: string;
  usStates: Array<{
    name: string;
    abbreviation: string;
  }>;
  filter: {
    state?: string,
    breed?: string,
    eyes?: string,
    age?: number,
    gender?: string,
    fixed?: string,
    registered?: string,
    papered?: string,
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, private http: Http) {
    this.filter = {};
    console.log(this.navParams);

  }

  close(filter) {
    this.viewCtrl.dismiss(filter);
  }

  filterDogs(filter) {
    console.log(filter);
    this.close(filter);
  }

  populateAges() {
    this.ages = [];
    for (let i = 1; i <= 30; i++) {
      this.ages.push(i);
    }
  }

  ionViewDidLoad() {
    this.dogs = this.navParams.data.dogs;
    this.searchType = this.navParams.data.searchType;
    this.populateAges();
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

    this.http
      .get("/assets/data/states.json")
      .map(data => data.json())
      .subscribe(data => {
        this.usStates = data;
      });
  }

}
