import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-rating',
  templateUrl: 'rating.html'
})
export class RatingPage {
    rate: any = 3;
    constructor(public navCtrl: NavController ) {
       
    }



}
