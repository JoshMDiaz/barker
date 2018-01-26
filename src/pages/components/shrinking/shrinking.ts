import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-shrinking',
  templateUrl: 'shrinking.html'
})
export class ShrinkingPage {
  items: Array<string>;
  constructor() {
      this.items = ['Orange', 'Banana', 'Pear', 'Tomato', 'Grape', 'Apple', 'Cherries', 'Cranberries', 'Raspberries', 'Strawberries', 'Watermelon','Orange', 'Banana', 'Pear', 'Tomato', 'Grape', 'Apple', 'Cherries', 'Cranberries', 'Raspberries', 'Strawberries', 'Watermelon','Orange', 'Banana', 'Pear', 'Tomato', 'Grape', 'Apple', 'Cherries', 'Cranberries', 'Raspberries', 'Strawberries', 'Watermelon','Orange', 'Banana', 'Pear', 'Tomato', 'Grape', 'Apple', 'Cherries', 'Cranberries', 'Raspberries', 'Strawberries', 'Watermelon'];
  }


}
