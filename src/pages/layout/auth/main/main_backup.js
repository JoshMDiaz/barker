import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, AlertController } from 'ionic-angular';

import { FormBuilder, Validators } from '@angular/forms';

import { Platform } from 'ionic-angular';
//***********  Facebook **************/
import { Facebook } from '@ionic-native/facebook';

//***********  Google plus **************/
import { GooglePlus } from '@ionic-native/google-plus';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { AuthData } from '../../../../providers/auth-data';


@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {
  public loginForm: any;
  public backgroundImage: any = "./assets/bg11.jpg";
  public imgLogo: any = "./assets/ionic.png";
  displayName: any;
  email: any;
  familyName: any;
  givenName: any;
  userId: any;
  imageUrl: any;
  constructor(public navCtrl: NavController, public authData: AuthData, public fb: FormBuilder, public alertCtrl: AlertController,public loadingCtrl: LoadingController,private facebook: Facebook,private googleplus: GooglePlus) {
      let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
      this.loginForm = fb.group({
            email: ['', Validators.compose([Validators.required, Validators.pattern(EMAIL_REGEXP)])],
            password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
      });
  }



// Facebook native login
// https://www.youtube.com/watch?v=HW-_UIQCGFk
// https://aaronczichon.de/2017/08/03/ionic-firebase-facebook/
// http://blog.ionicframework.com/ionic-firebase-facebook-login/
// 1. Install cordova plugin
//   - ionic cordva plugin add cordova-plugin-facebook4 --variable APP_ID="Your Facebook App Id" --variable APP_NAME="Your Facebook App Name"
//   - To get Facebook appId and app name , go to developer.facebook.com (more detail: ionic nativefacebook)
//   - npm install --save @ionic-native/facebook

// 2. - Import {facebook} from '@ionic-native/facebook' to app.module.ts
//    - add facebook to providers in app.module.ts 
// 3. - Import {facebook} from '@ionic-native/facebook' to page.
//    - Add facebook to constructor.

// Troubleshooting :
// - Key hash for facebook not working. https://forum.ionicframework.com/t/key-hash-for-facebook-not-working/44357/5
            

facebookLogin(){

let loadingPopup = this.loadingCtrl.create({
  spinner: 'crescent', 
  content: ''
});
loadingPopup.present();
// call signInWithFacebook in authData provider.
      this.authData.signInWithFacebook()
      .then( authData => {
        
        var resJSON = JSON.stringify(authData);
        alert("TEST3 return res="+resJSON)

        alert("firebase displayname= "+authData.displayName)
        alert("firebase email = "+authData.email)
        alert("photoURL="+authData.photoURL)
        alert("phoneNumber="+authData.phoneNumber)
        alert("phoproviderId="+authData.providerId)

        alert("firebaseUid = "+authData.uid)
        // CALL update userProfile()
        alert("Auth PASS");
        // update user datail 
        this.authData.updateUserProfile(authData.uid,authData.displayName,authData.email,authData.photoURL,authData.phoneNumber)
        loadingPopup.dismiss();
        alert("start setRoot")
        this.navCtrl.setRoot('AfterLoginPage');

      }, error => {
        var errorMessage: string = error.message;
        loadingPopup.dismiss().then( () => {
          alert("Error line 94 "+errorMessage)
            //this.presentAlert(errorMessage)
        });
      });

}



/// https://www.youtube.com/watch?v=g_UGNO3IfN8
//  Google account login with native plugin

// 1. Open firebase console > AUthentication > Sign-in method > Enable google 
// 2. Once you enabled google provider then click google > Click Project Settings > Click Add firebase to your Android App
// 3. (Pop up screen opened) Insert Android pakage name. To get android pakage name you should open confiq.xml and copy id from <widget id="com.ionicframwworl.yorappid"></>
// 4. Generate SHA-1.... 
//    =======GET YOUR SHA-1 KEY========
//    COMMAND :: keytool -exportcert -list -v -alias androiddebugkey -keystore ~/.android/debug.keystore 

//     =======WINDOWS USER FOR SHA-1 KEY SHOULD REPLACE THE CORRECT PATH =======
//    keytool -exportcert -list -v -alias androiddebugkey -keystore path to keystore here
//    NOTE: path to keystore here  should be replace with the correct debug key store

// Troubleshooting for Window SHA-1 KEY : https://www.youtube.com/watch?v=aakXkUY6MYUhttps://www.youtube.com/watch?v=aakXkUY6MYU

// 5. Insert SHA-1 value into Debug signing certificate SHA-1 (Pop up screen opened) and click register app.

// 6. Add google plus plugin : 
//    ========INSTALL CORDOVA PLUGIN========
//    COMMAND::cordova plugin add cordova-plugin-googleplus --save --variable REVERSED_CLIENT_ID=myreversedclientid
//    NOTE: Reverse wen client id from authentication > SIGN-IN METHOD > click google > click in Wen SDK configuration> get Web client ID and reverse Wen client ID for example : myreversedclientid in above command should be replaced by WEB Client Id in Reverse and it will start like XXXXXXXXXXXX.apps.googleusercontent.com to com.googleusercontent.apps.XXXXXXXXXXXX


// 7. ==========INSTALL GOOGLE PLUS NATIVE ============
//    COMMAND::$ npm install --save @ionic-native/google-plus

// 8. -In app.module.ts add  import { GoolePlus} from ' @ionic-native/google-plus.
//    -Add googlePlus provider into app.module.ts provider.
// 9. in page file import import { GoolePlus} from ' @ionic-native/google-plus.
// 10. Add webclientId from authentication > Google > Web SDK configuration to webClientId variable in googleLogin function.
googleLogin(){
  
  let loadingPopup = this.loadingCtrl.create({
  spinner: 'crescent', 
  content: ''
  });
  loadingPopup.present();
  this.authData.signInWithGoogle()
  .then( authData => {
    
    var resJSON = JSON.stringify(authData);
    alert("GOOGLE TEST3 return res="+resJSON)

    alert("firebase displayname= "+authData.displayName)
    alert("firebase email = "+authData.email)
    alert("photoURL="+authData.photoURL)
    alert("phoneNumber="+authData.phoneNumber)
    alert("phoproviderId="+authData.providerId)

    alert("firebaseUid = "+authData.uid)
    // CALL update userProfile()
    alert("Auth PASS");
    // update user datail 
    this.authData.updateUserProfile(authData.uid,authData.displayName,authData.email,authData.photoURL,authData.phoneNumber)
    loadingPopup.dismiss();
    alert("start setRoot")
    this.navCtrl.setRoot('AfterLoginPage');

  }, error => {
    var errorMessage: string = error.message;
    loadingPopup.dismiss().then( () => {
      alert("Error line 94 "+errorMessage)
        //this.presentAlert(errorMessage)
    });
  });  
}
  
  






STOPgoogleLogin(){

let loadingPopup = this.loadingCtrl.create({
spinner: 'crescent', 
content: ''
});
loadingPopup.present();


this.googleplus.login({
    'webClientId':'134053776757-rj2vajjm340t2bilpencqq4hh1j76sv5.apps.googleusercontent.com',
    'offline': true
}).then(res =>{
    firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
    .then(success =>{
        alert("Google login successfully")
        this.displayName = success.displayName;
        this.email = success.email;
        this.familyName = success.familyName;
        this.givenName = success.givenName;
        this.userId = success.userId;
        this.imageUrl = success.imageUrl;
        alert("displayname="+this.displayName +this.email+this.imageUrl+ this.familyName )
        loadingPopup.dismiss();
        this.navCtrl.setRoot('AfterLoginPage');

    }).catch(error =>{
        loadingPopup.dismiss().then( () => {
          alert("Error line 138"+error)
        });
    })

    // add catch error here
        //loadingPopup.dismiss();
}).catch(error =>{
  loadingPopup.dismiss().then( () => {
    alert("line 143")
    alert("Error"+error)
  });
})
}





    // ionic cordova plugin add cordova-plugin-googleplus --variable REVERSED_CLIENT_ID=com.googleusercontent.apps.134053776757-rj2vajjm340t2bilpencqq4hh1j76sv5

    //134053776757-rj2vajjm340t2bilpencqq4hh1j76sv5.apps.googleusercontent.com
    //com.googleusercontent.apps.134053776757-rj2vajjm340t2bilpencqq4hh1j76sv5
  loginWithEmail(){
    this.navCtrl.push('LoginPage');
  }

  createAccount(){
    this.navCtrl.push('RegisterPage');
  }
  presentAlert(title) {
    let alert = this.alertCtrl.create({
      title: title,
      buttons: ['OK']
    });
    alert.present();
  }

}
