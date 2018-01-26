import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController ,ToastController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-form-result',
  templateUrl: 'form-result.html'
})
export class FormResultPage {
    messages: FirebaseListObservable<any[]>;
    authState: boolean = false;
    messagesArray : any=[]; 

  constructor(public navCtrl: NavController, public navParams: NavParams , public loadingCtrl: LoadingController ,private toastCtrl: ToastController, public afDB: AngularFireDatabase, public afAuth: AngularFireAuth) {

    this.afAuth.authState.subscribe(auth => {
      if(auth) {
        this.authState = true;
      } else {
        console.log('auth false');
        this.authState = false;
      }
    });

    let loadingPopup = this.loadingCtrl.create({
      spinner: 'crescent', 
      content: ''
    });
    loadingPopup.present();
    this.messages = afDB.list('/message');
    this.messages.subscribe(messages => {
        this.messagesArray = messages;
        loadingPopup.dismiss()
    })
  }
  createMessage(){
    if(this.authState){
      this.navCtrl.push('FormPage'); 
    }else{
      this.presentToast('bottom','No permission : Please login', 3000);     
    }
  }

  deleteMessage(key: string) {  
    console.log("deleteMessage");
    if(this.authState){
      this.presentToast('bottom','Removed', 1000);
      this.messages.remove(key); 
    }else{
      this.presentToast('bottom','No permission : Please login', 3000);     
    }
  }

  presentToast(position: string,message: string ,duration: number) {
    let toast = this.toastCtrl.create({
      message: message,
      position: position,
      duration: duration
    });
    toast.present();
  }

}
