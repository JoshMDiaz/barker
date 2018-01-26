import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Search page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@IonicPage()
@Component({
  selector: 'page-item',
  templateUrl: 'item.html'
})
export class ItemPage {
  lists:Array<any> = [];
    shownDetail = null;
    constructor(public navCtrl: NavController ) {
   
    }



}
