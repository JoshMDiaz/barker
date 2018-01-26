import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ModalController,AlertController  } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database-deprecated';
import * as firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-form',
  templateUrl: 'form.html'
})
export class FormPage {
	messageForm : FormGroup;
  messages:  FirebaseListObservable<any>;

  contactName: string = "";
  contactSel: any = false;
  contactId: any;
  contactImgProfile: string;
  title:any;
  body:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public fb: FormBuilder,public afDB: AngularFireDatabase, public modalCtrl:ModalController,public alertCtrl: AlertController) {
      this.messages = afDB.list('/message');
      this.messageForm = fb.group({
          'title' : [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(100)])],
          'body' : [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(500)])]
        })  

  }
	submitForm(value: any):void{
    if(!this.contactSel){
            let alert = this.alertCtrl.create({
              title: 'Error',
              subTitle: 'Contact name is required!',
              buttons: ['OK']
            });
            alert.present();
        }else{
            this.messages.push({
              toId: this.contactId,
              toName:this.contactName,
              messageTitle:value.title,
              messageBody: value.body,
              imgProfile: this.contactImgProfile,
              createdDate: firebase.database.ServerValue.TIMESTAMP
            }).then( newContact => {
              this.navCtrl.setRoot('FormResultPage');
            }, error => {
              console.log(error);
            });
        }
	}	

 selectContact() {
   let profileModal = this.modalCtrl.create('FormModalPage');
        profileModal.onDidDismiss(dataArray => {
            this.contactSel = true; 
            this.contactName = dataArray.name;
            this.contactId = dataArray.id;
            this.contactImgProfile  = dataArray.imgProfile;
        });
        profileModal.present();
 }

}
