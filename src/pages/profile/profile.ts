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
  profileArray: any = [];
  profile: FirebaseObjectObservable<any[]>;
  dogs: Array<any> = [];
  currentUserUid: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    public afAuth: AngularFireAuth,
    public afDb: AngularFireDatabase
  ) {}

  message() {
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

  getCurrentUser(currentUserUid, loadingPopup) {
    this.profile = this.afDb.object("/userProfiles/" + currentUserUid);
    this.profile.subscribe(profile => {
      this.setProfile(profile, currentUserUid, loadingPopup);
    });
  }

  getOtherUser(userId, loadingPopup) {
    this.afDb.object(`/userProfiles/${userId}`).subscribe(profile => {
      this.setProfile(profile, userId, loadingPopup);
    });
  }

  setProfile(profile, uid, loadingPopup) {
    this.profileArray = profile;
    this.afDb
      .list("/dogProfiles/", {
        query: {
          orderByChild: "ownerId",
          equalTo: uid
        }
      })
      .subscribe(dogs => {
        this.dogs = dogs;
        loadingPopup.dismiss();
      });
  }

  ionViewDidLoad() {
    let loadingPopup = this.loadingCtrl.create({
      spinner: "crescent",
      content: ""
    });
    loadingPopup.present();
    this.afAuth.authState.subscribe(userAuth => {
      this.currentUserUid = userAuth.uid;
      if (this.navParams.data.userId) {
        this.getOtherUser(this.navParams.data.userId, loadingPopup);
      } else {
        this.getCurrentUser(this.currentUserUid, loadingPopup);
      }
    });
  }
}
