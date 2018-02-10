import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { ProfileModel } from "../../models/profile";
import { DogModel } from "../../models/dog";
import { AngularFireAuth } from "angularfire2/auth";
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/map";
import {
  CalendarModal,
  CalendarModalOptions,
  DayConfig,
  CalendarResult
} from "ion2-calendar";
import { ModalController } from "ionic-angular/components/modal/modal-controller";

@IonicPage()
@Component({
  selector: "page-create-dogs-profile",
  templateUrl: "create-dogs-profile.html"
})
export class CreateDogsProfilePage {
  profile = {} as ProfileModel;
  dogs: Array<any>;
  uid: string;
  comingFromCreateProfile: boolean = false;
  numberOfDogs: number;
  breeds: Array<string>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public afAuth: AngularFireAuth,
    private http: Http,
    public modalCtrl: ModalController
  ) {
    if (this.navParams.data.profileData) {
      this.comingFromCreateProfile = true;
    }
  }

  createDogsProfile(dogs) {
    console.log(dogs);
  }

  createEntireProfile(dogs) {
    console.log(dogs);
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

  setCalendarFromDate() {
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear() - 20;
    return new Date(year, month, day);
  }

  openCalendar(dog) {
    const options: CalendarModalOptions = {
      title: "Birthday",
      from: this.setCalendarFromDate(),
      to: new Date(),
      defaultScrollTo: new Date()
    };
    let myCalendar = this.modalCtrl.create(CalendarModal, {
      options: options
    });

    myCalendar.present();

    myCalendar.onDidDismiss((date: CalendarResult, type: string) => {
      dog.birthdate = date.string;
    });
  }

  ionViewDidLoad() {
    if (this.navParams.data && this.navParams.data.profileData) {
      this.profile = this.navParams.data.profileData;
    }
    this.afAuth.authState.subscribe(userAuth => {
      if (userAuth) {
        this.uid = userAuth.uid;
      }
    });
    this.http
      .get("/assets/data/breeds.json")
      .map(data => data.json())
      .subscribe(data => {
        this.breeds = data;
      });
  }
}
