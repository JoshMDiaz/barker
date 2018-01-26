import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html'
})
export class IntroPage {

  slides = [
    {
      title: "Welcome to ionic 3",
      description: "This is introduction header.<br>Walkthrough page. ",
      image: "./assets/slide1.png",
      color: "#3465a4"
    },
    {
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


  constructor(public navCtrl: NavController) {
  }

}
