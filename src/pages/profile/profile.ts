import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController,
  ToastController
} from "ionic-angular";
import {
  AngularFireDatabase,
  FirebaseObjectObservable
} from "angularfire2/database-deprecated";
import { AngularFireAuth } from "angularfire2/auth";

@IonicPage()
@Component({
  selector: "page-profile",
  templateUrl: "profile.html"
})
export class ProfilePage {
  messageSent: boolean = false;
  profileArray: any = [];
  profile: FirebaseObjectObservable<any[]>;
  dogs: Array<any> = [];
  uid: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    public afAuth: AngularFireAuth,
    public afDb: AngularFireDatabase
  ) {}

  message() {
    this.messageSent = !this.messageSent;
    this.presentToast("bottom", "message user clicked");
  }

  editProfile() {
    console.log("editing profile");
  }

  presentToast(position: string, message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      position: position,
      duration: 1000
    });
    toast.present();
  }

  seeProfile(dog) {
    this.navCtrl.push("DogProfilePage", {
      searchingDog: this.navParams.data.dog,
      dogProfile: dog
    });
  }

  ionViewDidLoad() {
    let loadingPopup = this.loadingCtrl.create({
      spinner: "crescent",
      content: ""
    });
    loadingPopup.present();
    this.afAuth.authState.subscribe(userAuth => {
      this.uid = userAuth.uid;
      this.profile = this.afDb.object("/userProfiles/" + this.uid);
      this.profile.subscribe(profile => {
        this.profileArray = profile;
        this.afDb
          .list("/dogProfiles/", {
            query: {
              orderByChild: "ownerId",
              equalTo: this.uid
            }
          })
          .subscribe(dogs => {
            this.dogs = dogs;
            loadingPopup.dismiss();
          });
      });
    });
  }
}
