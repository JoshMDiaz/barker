import { Component, Input } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

@Component({
  selector: "dog-card",
  templateUrl: "dog-card.html"
})
export class DogCardComponent {
  @Input() dog: any;
  @Input('show-message') showMessage?: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  seeProfile(dog) {
    this.navCtrl.push("DogProfilePage", {
      searchingDog: this.navParams.data.dog,
      dogProfile: dog
    });
  }
}
