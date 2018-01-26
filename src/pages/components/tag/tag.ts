import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-tag',
  templateUrl: 'tag.html'
})
export class TagPage {

    constructor(public navCtrl: NavController ) {
  
    }

delete(group) {
    alert("Deleted")
};



}
