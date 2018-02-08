import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { ProfileModel } from "../../models/profile";
import { DogModel } from "../../models/dog";
import { AngularFireAuth } from "angularfire2/auth";

/**
 * Generated class for the CreateDogsProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-create-dogs-profile",
  templateUrl: "create-dogs-profile.html"
})
export class CreateDogsProfilePage {
  profile = {} as ProfileModel;
  dog = {
    name: "",
    breed: "",
    gender: "",
    eyes: "",
    fixed: false,
    papered: false,
    registered: false,
    description: "",
    birthdate: "",
    photos: []
  } as DogModel;
  dogs: Array<{}>;
  uid: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public afAuth: AngularFireAuth) {}

  addEmptyDogs(num) {
    this.dogs = [];
    for (let i = 0; i < num; i++) {
      this.dogs.push(this.dog);
    }
  }

  ionViewDidLoad() {
    if (this.navParams.data && this.navParams.data.profileData) {
      this.profile = this.navParams.data.profileData;
      console.log(this.profile);
    }
    this.afAuth.authState.subscribe(userAuth => {
      if (userAuth) {
        this.uid = userAuth.uid;
      }
    });
  }
}
