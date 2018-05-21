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

  uid: string;
  dogs: Array<any> = [];
  filter: any = {};
  noDogsFound: boolean = false;
  searchType: string;
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public afDb: AngularFireDatabase,
    public loadingCtrl: LoadingController
  ) {}

  findGender(dog) {
    let gender = "male";
    if (dog.gender === "male") {
      gender = "female";
    }
    this.filter.gender = gender;
  }

  keepDogsCouldBreed(dogs) {
    for (let i = 0; i < dogs.length; i++) {
      if (!dogs[i].couldBreed) {
        dogs.splice(i, 1);
      }
    }
  }

  ionViewDidLoad() {
    this.uid = this.navParams.data.uid;
    this.searchType = this.navParams.data.searchType;
    if (this.searchType === "breeding") {
      this.findGender(this.navParams.data.dog);
    }
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
        if (this.searchType === "breeding") {
         this.keepDogsCouldBreed(this.dogs);
        }
        if (this.dogs.length === 0) {
          this.noDogsFound = true;
        }
        loadingPopup.dismiss();
      });
  }
}
