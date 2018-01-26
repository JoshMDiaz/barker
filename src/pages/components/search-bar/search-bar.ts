import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Search page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@IonicPage()
@Component({
  selector: 'page-search-bar',
  templateUrl: 'search-bar.html'
})
export class SearchBarPage {
 items: Array<string>;
    constructor(public navCtrl: NavController ) {
    
    }

  ngOnInit() {
    this.setItems();
  }

  setItems() {
    this.items = ['Orange', 'Banana', 'Pear', 'Tomato', 'Grape', 'Apple', 'Cherries', 'Cranberries', 'Raspberries', 'Strawberries', 'Watermelon'];
  }

  filterItems(ev: any) {
    this.setItems();
    let val = ev.value;

    if (val && val.trim() !== '') {
      this.items = this.items.filter(function(item) {
        return item.toLowerCase().includes(val.toLowerCase());
      });
    }
  }


}
