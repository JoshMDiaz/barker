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
  profileArray: any = [];
  profile: FirebaseObjectObservable<any[]>;
  dogs: Array<any> = [];
  filteredDogs: Array<any> = [];

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
    // TODO: check all user dogs to make sure that they have checked available for breeding
    // if they don't have any dogs available to breed and only have one dog, send them to the play date page
    // if they have multiple dogs and all cannot breed, show the the list of their dogs to choose from
    this.afAuth.authState.subscribe(userAuth => {
      if (userAuth) {
        this.profile = this.afDb.object("/userProfiles/" + userAuth.uid);
        this.profile.subscribe(profile => {
          this.profileArray = profile;
        });
        this.afDb
          .list("/dogProfiles/", {
            query: {
              orderByChild: "ownerId",
              equalTo: userAuth.uid
            }
          })
          .subscribe(dogs => {
            this.dogs = dogs;
          });
      } else {
        this.navCtrl.setRoot("FeedPage");
      }
    });
  }

  lookingFor(decision) {
    this.filteredDogs = Array.from(this.dogs);
    this.decision = decision;
    if (decision === 'breeding') {
      for (let i = 0; i < this.filteredDogs.length; i++) {
        if (this.filteredDogs[i].couldBreed === false) {
          this.filteredDogs.splice(i, 1);
        }
      }
    }
    if (this.filteredDogs.length > 1) {
      this.whichDogScreen = true;
      if (decision === "playDate") {
        this.choice = "for a play date";
      }
    } else {
      this.goToFeed(this.filteredDogs[0], decision);
    }
  }

  goToFeed(dog, searchType) {
    this.navCtrl.push("FeedPage", { dog: dog, searchType: searchType });
  }
}
