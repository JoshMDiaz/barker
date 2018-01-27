import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  LoadingController,
  AlertController,
  ToastController
} from "ionic-angular";
import { AuthData } from "../../providers/auth-data";

import {
  AngularFireDatabase,
  FirebaseObjectObservable
} from "angularfire2/database-deprecated";
import { AngularFireAuth } from "angularfire2/auth";

import md5 from "crypto-md5"; // dependencies:"crypto-md5"

@IonicPage()
@Component({
  selector: "page-looking-for",
  templateUrl: "looking-for.html"
})
export class LookingForPage {

  email: any;
  profilePicture: any = "https://www.gravatar.com/avatar/";
  profileArray: any = [];
  profile: FirebaseObjectObservable<any[]>;
  uid: any;

  whichDogScreen: boolean = false;
  choice: string = "to breed";
  dogs: Array<{}> = [];

  constructor(
    public navCtrl: NavController,
    public authData: AuthData,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    public afAuth: AngularFireAuth,
    public afDb: AngularFireDatabase
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad LookingForPage");
    this.afAuth.authState.subscribe(userAuth => {
      if (userAuth) {
        console.log("auth true!");
        this.uid = userAuth.uid;

        this.profile = this.afDb.object("/userProfile/" + this.uid);

        this.profile.subscribe(profile => {
          this.profileArray = profile;
          this.dogs = profile.dogs;
        });
      } else {
        console.log("auth false");
        this.navCtrl.setRoot("MainPage");
      }
    });
  }

  pickDog(dog) {
    console.log(dog);

  }

  hasMultipleDogsCheck() {
    if (this.dogs.length > 1) {
      this.whichDogScreen = true;
    }
  }

  check(decision) {
    // TODO: check if user has multiple dogs
    this.hasMultipleDogsCheck();
    if (decision === "breeding") {
      this.breeding();
    } else {
      this.choice = 'for a play date';
      this.playDate();
    }
  }

  breeding() {
    console.log("breeding");
  }
  playDate() {
    console.log("play date");
  }
}
