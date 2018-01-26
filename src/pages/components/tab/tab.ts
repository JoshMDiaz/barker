import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Search page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@IonicPage()
@Component({
  selector: 'page-tab',
  templateUrl: 'tab.html'
})
export class TabPage {
  lists:Array<any> = [];
    shownDetail = null;
    constructor(public navCtrl: NavController ) {
  
      this.lists = [
        { company: 'Microsoft', detail: 'Microsoft is an American multinational technology company headquartered in Redmond, Washington, that develops, manufactures, licenses, supports and sells computer software, consumer electronics and personal computers and services' },
        { company: 'Oracle', detail: 'Oracle Corporation is a multinational computer technology corporation, headquartered in Redwood Shores, California.' },
        { company: 'sap', detail: 'SAP SE is a German multinational software corporation that makes enterprise software to manage business operations and customer relations. SAP is headquartered in Walldorf, Baden-Württemberg, with regional offices in 130 countries.' },
        { company: 'Google', detail: 'Google is an American multinational technology company specializing in Internet-related services and products. These include online advertising technologies, search, cloud computing, software, and hardware.' },
        { company: 'Uber', detail: 'Uber Technologies Inc. is a transportation network company headquartered in San Francisco, California, United States, operating in 570 cities worldwide. It develops, markets and operates the Uber car transportation and food delivery mobile apps.' },
        { company: 'Apple', detail: 'Apple is an American multinational technology company headquartered in Cupertino, California that designs, develops, and sells consumer electronics, computer software, and online services.' }
      ];       
    }
toggleDetail(group) {
    if (this.isDetailShown(group)) {
        this.shownDetail = null;
    } else {
        this.shownDetail = group;
    }
};
isDetailShown(group) {
    return this.shownDetail === group;
};



}
