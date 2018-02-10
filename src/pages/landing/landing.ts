import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  LoadingController,
  ToastController
} from "ionic-angular";

import {
  AngularFireDatabase,
  FirebaseObjectObservable
} from "angularfire2/database-deprecated";
import { AngularFireAuth } from "angularfire2/auth";

import md5 from "crypto-md5"; // dependencies:"crypto-md5"

@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {
  profileArray: any = [];
  profile: FirebaseObjectObservable<any[]>;

  whichDogScreen: boolean = false;
  choice: string = "to breed";
  dog: {};
  decision: string;

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    public afAuth: AngularFireAuth,
    public afDb: AngularFireDatabase
  ) {}

  ionViewDidLoad() {
    let loadingPopup = this.loadingCtrl.create({
      spinner: "crescent",
      content: ""
    });
    loadingPopup.present();
    this.afAuth.authState.subscribe(userAuth => {
      if (userAuth) {
        this.profile = this.afDb.object("/userProfiles/" + userAuth.uid);
        this.profile.subscribe(profile => {
          this.profileArray = profile;
          if (this.profileArray.dogs && this.profileArray.dogs.length > 0) {
            loadingPopup.dismiss();
            this.navCtrl.setRoot("LookingForPage");
          } else {
            loadingPopup.dismiss();
            this.navCtrl.setRoot("IntroPage", {email: this.profileArray.email, uid: userAuth.uid});
          }
        });
      } else {
        this.navCtrl.setRoot("MainPage");
      }
    });
  }

}
