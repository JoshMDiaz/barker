import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-datetime',
  templateUrl: 'datetime.html'
})
export class DatetimePage {
  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20',
    time:'07:00'
  }
    constructor(public navCtrl: NavController ) {
       
    }


}
