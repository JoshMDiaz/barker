import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, AlertController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthData } from '../../../../providers/auth-data';



@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  public registerForm;
  public backgroundImage: any = "./assets/bg2.jpg";

  constructor(public nav: NavController, public authData: AuthData, public fb: FormBuilder, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
    
      let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
      
      this.registerForm = fb.group({
            email: ['', Validators.compose([Validators.required, Validators.pattern(EMAIL_REGEXP)])],
            profileName: ['', Validators.compose([Validators.minLength(2), Validators.required])],
            phone: ['', Validators.compose([Validators.minLength(6), Validators.required])],
            password: ['', Validators.compose([Validators.minLength(6), Validators.required])],

      });
  
  }

  registerUser(){
    console.log("call signopUser");
    if (!this.registerForm.valid){
      console.log(this.registerForm.value);
      this.presentAlert("invalid form");
    } else {

      let loadingPopup = this.loadingCtrl.create({
        spinner: 'crescent', 
        content: 'Creating..'
      });
      loadingPopup.present();

      this.authData.registerUser(
          this.registerForm.value.profileName, 
          this.registerForm.value.email, 
          this.registerForm.value.password,
          this.registerForm.value.phone)
      .then(() => {
          loadingPopup.dismiss();
          this.nav.setRoot('AfterLoginPage');
      }, (error) => { 
         var errorMessage: string = error.message;
          loadingPopup.dismiss();
          this.presentAlert(errorMessage);      
      });

    }
  }
  presentAlert(title) {
    let alert = this.alertCtrl.create({
      title: title,
      buttons: ['OK']
    });
    alert.present();
  }
}
