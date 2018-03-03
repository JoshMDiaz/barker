import { Component, Input } from '@angular/core';
import { ActionSheetController, NavController } from 'ionic-angular';

@Component({
  selector: 'header-bar',
  templateUrl: 'header-bar.html'
})
export class HeaderBarComponent {
  @Input() title: string;
  @Input() gender?: string;
  @Input('dog-profile') dogProfile?: boolean;
  profilePage: boolean = false;
  searchPage: boolean = false;

  constructor(public actionsheetCtrl: ActionSheetController, public navCtrl: NavController) {}

  determineProfilePage() {
    if (this.navCtrl.getActive().name === 'ProfilePage') {
      return true;
    }
  }

  determineSearchPage() {
    let profilePage = false
    switch (this.navCtrl.getActive().name) {
      case 'LookingForPage':
        profilePage = true;
        break;
      case 'LookingForBreedingPage':
        profilePage = true;
        break;
      case 'DogSearchPage':
        profilePage = true;
        break;
      default:
        profilePage = false;
        break;
    }
    return profilePage;
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
            if (this.determineProfilePage()) {
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
            if (this.determineSearchPage()) {
              return;
            } else {
              this.navCtrl.push('LookingForPage');
            }
          }
        },
        {
          text: 'Logout',
          icon: 'heart-outline',
          handler: () => {
            console.log('logout clicked');
          }
        },
        {
          text: 'Close',
          role: 'cancel',
          icon: 'close',
          handler: () => {}
        }
      ]
    });
    actionSheet.present();
  }

}
