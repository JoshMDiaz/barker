import { Component, Input } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { AngularFireAuth } from "angularfire2/auth";
import { AuthData } from "../../providers/auth-data";
import { AngularFireDatabase } from "angularfire2/database-deprecated";

@Component({
  selector: "dog-card",
  templateUrl: "dog-card.html"
})
export class DogCardComponent {
  @Input() uid: string;
  @Input() dog: any;
  @Input() favorites: Array<string>;
  @Input("show-message") showMessage?: boolean = true;

  colorSet: boolean = false;
  showExtraInfo: boolean = false;
  owner: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public afAuth: AngularFireAuth, private authData: AuthData, public afDb: AngularFireDatabase) { }

  seeProfile(dog) {
    this.navCtrl.push("DogProfilePage", {
      searchingDog: this.navParams.data.dog,
      dogProfile: dog,
      uid: this.navParams.data.uid
    });
  }

  seeMore() {
    this.showExtraInfo = !this.showExtraInfo;
  }

  seeOwnerProfile() {
    this.navCtrl.push("ProfilePage", {
      userId: this.dog.ownerId
    });
  }

  message(dog) {
    console.log(`message to ${dog.name} owner`);
  }

  remove(array, string) {
    const index = array.indexOf(string);
    array.splice(index, 1);
  }

  toggleFavorite(dog) {
    let favortiesArr = [];
    dog.liked = !dog.liked;
    dog.liked ? this.favorites.push(dog.$key) : this.remove(this.favorites, dog.$key);
    favortiesArr = this.favorites;
    this.authData.setUserProfileField(
      this.navParams.data.uid,
      'favorites',
      favortiesArr
    );
  }

  ionViewDidLoad() {
    this.afDb
      .object(`/userProfiles/${this.dog.ownerId}`)
      .subscribe(owner => {
        this.owner = owner;
      });
  }
}
