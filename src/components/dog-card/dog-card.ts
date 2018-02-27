import { Component, Input } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { AngularFireAuth } from "angularfire2/auth";

@Component({
  selector: "dog-card",
  templateUrl: "dog-card.html"
})
export class DogCardComponent {
  @Input() uid: string;
  @Input() dog: any;
  @Input("show-message") showMessage?: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public afAuth: AngularFireAuth) {}

  seeProfile(dog) {
    this.navCtrl.push("DogProfilePage", {
      searchingDog: this.navParams.data.dog,
      dogProfile: dog
    });
  }

  message(dog) {
    console.log(`message to ${dog.name} owner`);
  }

  favorite(dog) {
    console.log(`${dog.name} is a favorite`);
  }

  ionViewDidLoad() {}
}
