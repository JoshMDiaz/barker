import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Search page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@IonicPage()
@Component({
  selector: 'page-range',
  templateUrl: 'range.html'
})
export class RangePage {
  brightness: number = 20;
  saturation: number = 0;
  warmth: number = 1300;
  structure: any = {lower: 33, upper: 60};

 
    constructor(public navCtrl: NavController ) {
   
    }
 onChange(ev: any) {
    console.log('Changed', ev);
  }


}
