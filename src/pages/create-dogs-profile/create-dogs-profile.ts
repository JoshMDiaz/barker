import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { ProfileModel } from "../../models/profile";
import { DogModel } from "../../models/dog";
import { AngularFireAuth } from "angularfire2/auth";
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/map";
import { AuthData } from "../../providers/auth-data";
import { AngularFireDatabase } from "angularfire2/database-deprecated";

@IonicPage()
@Component({
  selector: "page-create-dogs-profile",
  templateUrl: "create-dogs-profile.html"
})
export class CreateDogsProfilePage {
  profile = {} as ProfileModel;
  dogs: Array<any> = [];
  uid: string;
  email: string;
  numberOfDogs: number;
  breeds: Array<string>;
  months: Array<string>;
  days: Array<number> = [];
  years: Array<number> = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public afAuth: AngularFireAuth,
    private http: Http,
    private authData: AuthData,
    public afDb: AngularFireDatabase
  ) {}

  convertBirthday(dog) {
    dog.birthdate = `${dog.year}-${dog.month}-${dog.day}`;
  }

  createProfile(dogs) {
    dogs.forEach(dog => {
      this.convertBirthday(dog);
      this.authData.updateDogsProfile(
        dog.name,
        dog.breed,
        dog.gender,
        dog.eyes,
        dog.fixed,
        dog.couldBreed,
        dog.papered,
        dog.registered,
        dog.description || "",
        dog.birthdate,
        this.uid,
        dog.photos || [""],
        dog.profileImg || ""
      );
    });
    this.createUserProfile(dogs);
  }

  createUserProfile(dogs) {
    this.authData.updateUserProfile(
      this.uid,
      this.profile.name,
      this.email,
      this.profile.photo || "",
      this.profile.city,
      this.profile.state,
      this.profile.description || "",
      dogs.length,
      true
    );
  }

  addEmptyDogs(num) {
    this.dogs = [];
    for (let i = 0; i < num; i++) {
      this.dogs.push({
        name: "",
        breed: "",
        gender: "",
        eyes: "",
        fixed: false,
        couldBreed: false,
        papered: false,
        registered: false,
        description: "",
        birthdate: "",
        photos: []
      });
    }
  }

  createDays(monthNum?, year?) {
    this.days = [];
    var limit = 31;
    if (monthNum) {
      monthNum = parseInt(monthNum);
      switch (monthNum) {
        case 2:
          if ((0 === year % 4 && 0 !== year % 100) || 0 === year % 400) {
            limit = 29;
          } else {
            limit = 28;
          }
          break;
        case 4 || 6 || 9 || 11:
          limit = 30;
        default:
          break;
      }
    }
    for (let i = 1; i <= limit; i++) {
      this.days.push(i);
    }
  }

  setYears() {
    let today = new Date();
    let currentYear = today.getFullYear();
    let startYear = currentYear - 25;
    for (let i = startYear; i <= currentYear; i++) {
      this.years.push(i);
    }
  }

  ionViewDidLoad() {
    this.createDays();
    this.setYears();
    if (this.navParams.data && this.navParams.data.profileData) {
      this.profile = this.navParams.data.profileData;
    }
    this.afAuth.authState.subscribe(userAuth => {
      if (userAuth) {
        this.uid = userAuth.uid;
        this.email = userAuth.email;
      }
    });

    this.http
      .get("/assets/data/breeds.json")
      .map(data => data.json())
      .subscribe(data => {
        this.breeds = data;
      });

    this.http
      .get("/assets/data/months.json")
      .map(data => data.json())
      .subscribe(data => {
        this.months = data;
      });
  }
}
