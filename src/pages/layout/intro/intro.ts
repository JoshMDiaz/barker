import { Component } from "@angular/core";
import { IonicPage, NavController } from "ionic-angular";
import { NavParams } from "ionic-angular/navigation/nav-params";
import { AuthData } from "../../../providers/auth-data";

@IonicPage()
@Component({
  selector: "page-intro",
  templateUrl: "intro.html"
})
export class IntroPage {
  slides = [
    {
      title: "Thanks for checking out Barker!",
      description:
        "Looking for a play date for your pup? Wanting to find the perfect mate for your canine companion? Barker makes both of these easy!",
      image: "./assets/slide1.png", //logo will go here
      color: "#3465a4"
    },
    {
      // maybe do a quick "walkthrough" with the next few slides on how to navigate the app
      title: "Layout with firebase",
      description: "This is introduction header.<br>Walkthrough page. ",
      image: "./assets/slide2.png",
      color: "#73d216"
    },
    {
      title: "Components",
      description: "This is introduction header.<br>Walkthrough page. ",
      image: "./assets/slide3.png",
      color: "#cc0000"
    },
    {
      title: "Theme",
      description: "This is introduction header.<br>Walkthrough page. ",
      image: "./assets/slide4.png",
      color: "#75507b"
    }
  ];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private authData: AuthData
  ) {}

  goToCreateProfile() {
    this.navCtrl.setRoot("CreateProfilePage", {
      email: this.navParams.data.email,
      uid: this.navParams.data.uid
    });
    this.authData.setUserProfileField(
      this.navParams.data.uid,
      'introCompleted',
      true
    );
  }

  ionViewDidLoad() {}

}
