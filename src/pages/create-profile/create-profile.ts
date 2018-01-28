import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthData } from '../../providers/auth-data';
import { Http, Response } from '@angular/http';
import { Profile } from '../../models/profile';
import "rxjs/add/operator/map";

@IonicPage()
@Component({
  selector: 'page-create-profile',
  templateUrl: 'create-profile.html',
})
export class CreateProfilePage {

  profile = {} as Profile;
  userData: {
    name: string,
    email: string,
    phone: string
  };
  uid: string;
  usStates: Array<{
    name: string;
    abbreviation: string;
  }>;
  breeds: Array<string>;
  isShowAboutDog: true;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: Http,
    private authData: AuthData
  ) {
    this.profile.dogs = [];
    this.userData = this.navParams.data.userData;
    this.uid = this.navParams.data.uid;
    console.log(this.userData, this.uid);

  }

  createProfile(profileData) {
    // this.afAuth.authState.take(1).subscribe(auth => {
    //   this.afDatabase
    //     .object(`profile/${auth.uid}`)
    //     .set(this.profile)
    //     .then(() => this.navCtrl.setRoot('HomePage'));
    // });

    // TODO: fill in all the data below based off NavParams and user input from form
    this.authData.updateUserProfile(this.uid, this.userData.name, this.userData.email, profileData.photo, this.userData.phone, profileData.city, profileData.numberOfDogs, profileData.state, profileData.dogs, profileData.description)
  }

  showAboutDog() {
    for (let i = 0; i < this.profile.numberOfDogs; i++) {
      this.profile.dogs.push({
        name: '',
        age: null,
        breed: '',
        gender: '',
        neutered: false,
        papered: false,
        registered: false,
        photos: []
      });
    }
    this.isShowAboutDog = true;
  }

  ionViewDidLoad() {
    this.http
      .get("/assets/data/states.json")
      .map(data => data.json())
      .subscribe(data => {
        this.usStates = data;
      });
    this.http
      .get("/assets/data/breeds.json")
      .map(data => data.json())
      .subscribe(data => {
        this.breeds = data;
      });
  }

}
