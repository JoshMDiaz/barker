import { Component, Input } from '@angular/core';
import { ActionSheetController, NavController, ModalController, NavParams } from 'ionic-angular';
import { AuthData } from '../../providers/auth-data';

@Component({
  selector: 'header-bar',
  templateUrl: 'header-bar.html'
})
export class HeaderBarComponent {
  @Input() title: string;
  @Input() gender?: string;
  @Input() dogs?: Array<any>;
  @Input('search-type') searchType?: string;
  @Input('hide-button') hideButton?: boolean;
  @Input('dog-profile') dogProfile?: boolean;
  @Input('dog-search') dogSearch?: boolean;

  constructor(public actionsheetCtrl: ActionSheetController, public navCtrl: NavController, private navParams: NavParams, private authData: AuthData, public modalCtrl: ModalController) { }

  determineCurrentPage(arr) {
    let currentPage = false
    for (let i = 0; i < arr.length; i++) {
      switch (this.navCtrl.getActive().name) {
        case arr[i]:
          currentPage = true;
          break;
      }
    }
    return currentPage;
  }

  toggleActionSheet() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Menu',
      cssClass: 'action-sheets',
      buttons: [
        {
          text: 'Profile',
          icon: 'person',
          handler: () => {
            if (this.determineCurrentPage(['ProfilePage'])) {
              return;
            } else {
              this.navCtrl.push('ProfilePage');
            }
          }
        },
        {
          text: 'Find Dogs',
          icon: 'search',
          handler: () => {
            if (this.determineCurrentPage(['LookingForPage', 'LookingForBreedingPage', 'DogSearchPage'])) {
              return;
            } else {
              this.navCtrl.push('LookingForPage');
            }
          }
        },
        {
          text: 'Messages',
          icon: 'chatbubbles',
          handler: () => {
            if (this.determineCurrentPage(['MessagesPage', 'MessagePage'])) {
              return;
            } else {
              this.navCtrl.push('MessagesPage');
            }
          }
        },
        {
          text: 'Logout',
          icon: 'log-out',
          handler: () => {
            this.logout();
          }
        },
        {
          text: 'Close',
          role: 'cancel',
          icon: 'close',
          handler: () => { }
        }
      ]
    });
    actionSheet.present();
  }

  openFilter() {
    let profileModal = this.modalCtrl.create('DogSearchModalPage', { dogs: this.dogs, searchType: this.searchType });
    profileModal.present();
  }

  logout() {
    this.authData.logoutUser()
      .then(authData => {
        this.navCtrl.setRoot('LoginPage');
      });
  }

}
