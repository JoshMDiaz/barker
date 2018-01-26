import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Search page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@IonicPage()
@Component({
  selector: 'page-select-option',
  templateUrl: 'select-option.html'
})
export class SelectOptionPage {
 gender: string;
  gaming: string;
  toppings: Array<string>;
  petAlertOpts: any;
  petData: any;
  pets: Array<string>;
  notifications: string = 'mute_1';
  rating: number = 2;

    constructor(public navCtrl: NavController ) {
          this.gender = 'f';
          this.gaming = 'n64';

          this.petAlertOpts = {
            title: 'Like Pets?',
            subTitle: 'Select your favorite'
          };

          this.toppings = ['bacon', 'xcheese'];

          this.petData = [
            { text: 'Bird', value: 'bird' },
            { text: 'Cat', value: 'cat' },
            { text: 'Dog', value: 'dog' },
            { text: 'Honey Badger', value: 'honeybadger' },
          ];

          this.pets = ['cat', 'dog'];
    }  
    
  monthChange(val: any) {
    alert(val)
    console.log('Month Change:', val);
  }

  yearChange(val: any) {
    console.log('Year Change:', val);
  }

}
