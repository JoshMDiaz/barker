import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AngularFireDatabase } from "angularfire2/database-deprecated";

@IonicPage()
@Component({
  selector: "page-dog-search",
  templateUrl: "dog-search.html"
})
export class DogSearchPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public afDb: AngularFireDatabase
  ) {}

  uid: string;
  dogs: Array<any> = [];

  ionViewDidLoad() {
    this.uid = this.navParams.data.uid;

    this.afDb
      .list("/dogProfiles/")
      .subscribe(dogs => {
        this.dogs = dogs;
        console.log(this.dogs);

      });
  }
}
