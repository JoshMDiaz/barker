import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html',
})
export class MessagesPage {
  messages: Array<any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  delete(message) {
    console.log(`${message} deleted`);
  }

  readStatus(message) {
    message.hasRead = !message.hasRead;
    console.log(`${message.hasRead} ${message.hasRead ? 'read' : 'not read'}`);
  }

  goToConversation(message) {
    this.navCtrl.push('MessageConversationPage', {uid: message.uid})
  }

  ionViewDidLoad() {
    // TEMP
    this.messages = [
      {
        id: 1,
        uid: 'jf3j90fj93jd3d',
        name: 'Person 1',
        time: 1520130310,
        hasRead: false,
        profileImg: 'http://placehold.it/50x50'
      },
      {
        id: 2,
        uid: 'jf3j90fj93jd3d',
        name: 'Person 2',
        time: 152011234,
        hasRead: false
      },
      {
        id: 3,
        uid: 'jf3j90fj93jd3d',
        name: 'Person 3',
        time: 1520130000,
        hasRead: false
      }
    ]
  }

}
