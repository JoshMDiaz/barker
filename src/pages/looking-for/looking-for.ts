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
  FirebaseObjectObservable,
  FirebaseListObservable
} from "angularfire2/database-deprecated";
import { AngularFireAuth } from "angularfire2/auth";

import md5 from "crypto-md5"; // dependencies:"crypto-md5"

@IonicPage()
@Component({
  selector: "page-looking-for",
  templateUrl: "looking-for.html"
})
export class LookingForPage {
  dogs: Array<any> = [];
  filteredDogs: Array<any> = [];
  uid: string;
  profileArray: any = [];
  profile: FirebaseObjectObservable<any[]>;

  constructor(
    public navCtrl: NavController,
    public authData: AuthData,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    public afAuth: AngularFireAuth,
    public afDb: AngularFireDatabase
  ) { }

  ionViewDidLoad() {
    this.afAuth.authState.subscribe(userAuth => {
      if (userAuth) {
        this.uid = userAuth.uid;
        this.profile = this.afDb.object("/userProfiles/" + this.uid);
        this.profile.subscribe(profile => {
          this.profileArray = profile;
        });
        this.afDb
          .list("/dogProfiles/", {
            query: {
              orderByChild: "ownerId",
              equalTo: this.uid
            }
          })
          .subscribe(dogs => {
            this.dogs = dogs;
          });
      } else {
        this.navCtrl.setRoot("LoginPage");
      }
    });
  }

  filterDogs(dogs) {
    var dogArr = [];
    for (let i = 0; i < dogs.length; i++) {
      if (dogs[i].couldBreed === true) {
        dogArr.push(dogs[i]);
      }
    }
    this.filteredDogs = dogArr;
    return dogArr;
  }

  lookingFor(decision) {
    this.filteredDogs = Array.from(this.dogs);
    if (decision === 'breeding' && this.filterDogs(this.filteredDogs).length > 1) {
      this.navCtrl.push("LookingForBreedingPage", { uid: this.uid, dogs: this.filterDogs(this.filteredDogs) })
    } else {
      this.goToFeed(this.filteredDogs[0], decision);
    }
  }

  goToFeed(dog, searchType) {
    this.navCtrl.push("DogSearchPage", { dog: dog, searchType: searchType, uid: this.uid });
  }
}
