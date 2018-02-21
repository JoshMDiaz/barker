import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AngularFireDatabase } from "angularfire2/database-deprecated";
import { LoadingController } from "ionic-angular/components/loading/loading-controller";

@IonicPage()
@Component({
  selector: "page-dog-search",
  templateUrl: "dog-search.html"
})
export class DogSearchPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public afDb: AngularFireDatabase,
    public loadingCtrl: LoadingController
  ) {}

  uid: string;
  dogs: Array<any> = [];
  filter: any = {};

  seeProfile(dog) {
    this.navCtrl.push("DogProfilePage", {
      searchingDog: this.navParams.data.dog,
      dogProfile: dog
    });
  }

  setFilterCriteria(dog) {
    if (this.navParams.data.searchType === "breeding") {
      this.findGender(dog);
    }
  }

  findGender(dog) {
    let gender = "male";
    if (dog.gender === "male") {
      gender = "female";
    }
    this.filter.gender = gender;
  }

  ionViewDidLoad() {
    this.uid = this.navParams.data.uid;
    this.setFilterCriteria(this.navParams.data.dog);
    let loadingPopup = this.loadingCtrl.create({
      spinner: 'crescent',
      content: ''
    });
    loadingPopup.present();
    this.afDb
      .list("/dogProfiles/", {
        query: {
          orderByChild: "gender",
          equalTo: this.filter.gender
        }
      })
      .subscribe(dogs => {
        dogs.forEach(dog => {
          if (dog.ownerId !== this.navParams.data.uid) {
            this.dogs.push(dog);
          }
        });
        loadingPopup.dismiss();
      });
  }
}