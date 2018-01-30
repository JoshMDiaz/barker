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
  profileArray: any = [];
  profile: FirebaseObjectObservable<any[]>;

  whichDogScreen: boolean = false;
  choice: string = "to breed";
  dog: {};
  decision: string;

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
    this.afAuth.authState.subscribe(userAuth => {
      if (userAuth) {
        this.profile = this.afDb.object("/userProfile/" + userAuth.uid);
        this.profile.subscribe(profile => {
          this.profileArray = profile;
        });
      } else {
        this.navCtrl.setRoot("MainPage");
      }
    });
  }

  lookingFor(decision) {
    this.decision = decision;
    if (this.profileArray.numberOfDogs > 1) {
      this.whichDogScreen = true;
      if (decision === "playDate") {
        this.choice = "for a play date";
      }
    } else {
      this.goToFeed(this.profileArray.dogs[0], decision);
    }
  }

  goToFeed(dog, searchType) {
    this.navCtrl.push("FeedPage", { dog: dog, searchType: searchType });
  }

}
