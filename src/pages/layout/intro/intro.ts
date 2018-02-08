import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html'
})
export class IntroPage {

  slides = [
    {
      title: "Thanks for checking out Barker!",
      description: "Looking for a play date for your pup? Wanting to find the perfect mate for your canine companion? Barker makes both of these easy!",
      image: "./assets/slide1.png", //logo will go here
      color: "#3465a4"
    },
    { // maybe do a quick "walkthrough" with the next few slides on how to navigate the app
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

  uid: string;
  email: string;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.uid = this.navParams.data.uid;
    this.email = this.navParams.data.email;
  }

  goToCreateProfile() {
    this.navCtrl.setRoot('CreateProfilePage', {email: this.email, uid: this.uid});
  }

  goToSetupDogsProfile() {
    this.navCtrl.setRoot('CreateDogsProfilePage', {email: this.email, uid: this.uid});
  }

}
