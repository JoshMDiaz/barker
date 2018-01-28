import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, AlertController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';

import { Platform } from 'ionic-angular';


//***********  Facebook **************/
import { Facebook } from '@ionic-native/facebook';

//***********  Google plus **************/
import { GooglePlus } from '@ionic-native/google-plus';


import { AuthData } from '../../../../providers/auth-data';


@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  public loginForm: any;
  public backgroundImage: any = "./assets/bg1.jpg";
  public imgLogo: any = "./assets/medium_150.70391061453px_1202562_easyicon.net.png";

  constructor(
    public navCtrl: NavController,
    public authData: AuthData,
    public fb: FormBuilder,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private facebook: Facebook,
    private googleplus: GooglePlus,
    private platform: Platform
  ) {
    let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    this.loginForm = fb.group({
      email: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern(EMAIL_REGEXP)
        ])
      ],
      password: [
        "",
        Validators.compose([Validators.minLength(6), Validators.required])
      ]
    });
  }

  login() {
    if (!this.loginForm.valid) {
      //this.presentAlert('Username password can not be blank')
      console.log("error");
    } else {
      let loadingPopup = this.loadingCtrl.create({
        spinner: "crescent",
        content: ""
      });
      loadingPopup.present();
      this.authData
        .loginUser(this.loginForm.value.email, this.loginForm.value.password)
        .then(
          authData => {
            loadingPopup.dismiss();
            this.navCtrl.setRoot("LandingPage");
          },
          error => {
            var errorMessage: string = error.message;
            loadingPopup.dismiss().then(() => {
              this.presentAlert(errorMessage);
            });
          }
        );
    }
  }

  facebookLogin() {
    let loadingPopup = this.loadingCtrl.create({
      spinner: "crescent",
      content: "",
      duration: 15000
    });
    loadingPopup.present();
    // call signInWithFacebook in authData provider.
    if (this.platform.is("cordova")) {
      this.authData.signInWithFacebook().then(
        authData => {
          var resJSON = JSON.stringify(authData);
          this.authData.updateUserProfileFB(
            authData.uid,
            authData.displayName,
            authData.email,
            authData.photoURL,
            authData.phoneNumber
          );
          loadingPopup.dismiss();
          this.navCtrl.setRoot("AfterLoginPage");
        },
        error => {
          var errorMessage: string = error.message;
          loadingPopup.dismiss().then(() => {
            alert("Error:" + errorMessage);
          });
        }
      );
    } else {
      alert("Please install app in device.");
      loadingPopup.dismiss();
    }
  }

  forgot() {
    this.navCtrl.push("ForgotPage");
  }

  createAccount() {
    this.navCtrl.push("RegisterPage");
  }
  presentAlert(title) {
    let alert = this.alertCtrl.create({
      title: title,
      buttons: ["OK"]
    });
    alert.present();
  }
}
