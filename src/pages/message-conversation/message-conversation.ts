import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-message-conversation',
  templateUrl: 'message-conversation.html',
})
export class MessageConversationPage {
  profile: {
    name: string
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.profile = {
      name: 'Test Person 1'
    }
  }

  ionViewDidLoad() {
  }

}
