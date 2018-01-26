import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Platform } from 'ionic-angular';

//***********  Facebook **************/
import { Facebook } from '@ionic-native/facebook';

//***********  Google plus **************/
import { GooglePlus } from '@ionic-native/google-plus';

@Injectable()
export class AuthData {
  userData: any;
  constructor(public afAuth: AngularFireAuth, private platform: Platform,private facebook: Facebook,private googleplus: GooglePlus) {
  }

//   canActivate() {
//       return this.checkIfLoggedIn();
//   }
 
//   private checkIfLoggedIn(): boolean{
 
//       // A call to the actual login service would go here
//       // For now we'll just randomly return true or false
 
//       let loggedIn:boolean = Math.random() < 0.5;
 
//       if(!loggedIn){
//           console.log("LoginGuard: The user is not logged in and can't navigate product details");
//       }
 
//       return loggedIn;
//   }

//  // Returns whether the user is currently authenticated
//   // Could check if current token is still valid
//   authenticated() : boolean {
//     return this.isLoggedIn;
//   }

signInWithPopupFacebook(): Promise<any> {
  return this.afAuth.auth
    .signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then(res => console.log(res));
}
// signInWithReirectGoogle() : Promise<any>{
//   let provider = new firebase.auth.GoogleAuthProvider();
//   provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
//   firebase.auth().signInWithRedirect(provider);
//   firebase.auth().getRedirectResult().then(function (authData) {
//     this.navCtrl.push(TabsPage);
//   }).catch(function (error) {
//     console.log(error);
//   });
// }

// Facebook native login
// https://www.youtube.com/watch?v=HW-_UIQCGFk
// 1. Install cordova plugin
//   - ionic corodva plugin add cordova-plugin-facebook4 --variable APP_ID="Your Facebook App Id" --variable APP_NAME="Your Facebook App Name"
//   - To get Facebook appId and app name , go to developer.facebook.com (more detail: ionic nativefacebook)
//   - npm install --save @ionic-native/facebook

// 2. - Import {facebook} from '@ionic-native/facebook' to app.module.ts
//    - add facebook to providers in app.module.ts 
// 3. - Import {facebook} from '@ionic-native/facebook' to page.
//    - Add facebook to constructor.

// acebookLogin(){
//   this.facebook.login(['email']).then( (response) => {
//       const facebookCredential = firebase.auth.FacebookAuthProvider
//           .credential(response.authResponse.accessToken);

//       firebase.auth().signInWithCredential(facebookCredential)
//       .then((success) => {
//           console.log("Firebase success: " + JSON.stringify(success));
//           this.userProfile = success;
//       })
//       .catch((error) => {
//           console.log("Firebase failure: " + JSON.stringify(error));
//       });

//   }).catch((error) => { console.log(error) });
// }
//Run Android platform error with “cordova-plugin-facebook4”
// https://forum.ionicframework.com/t/run-android-platform-error-with-cordova-plugin-facebook4/114510
signInWithFacebook(): Promise<any> {
  if (this.platform.is('cordova')) {
    return this.facebook.login(['email', 'public_profile']).then(res => {
      const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
      return firebase.auth().signInWithCredential(facebookCredential);
    })
  }
  else {
    return this.afAuth.auth
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(res => console.log(res));
  }
}
signInWithGoogle(): Promise<any> {
  alert("call signin with google")
  if (this.platform.is('cordova')) {
    alert("1")
    return this.googleplus.login({
      'webClientId':'134053776757-rj2vajjm340t2bilpencqq4hh1j76sv5.apps.googleusercontent.com',
      'offline': true}).then(res =>{
      alert('2')
      return firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken)) 
    })
  }
  else {
    alert('error')
    return this.afAuth.auth
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(res => console.log(res));
  }
}

  
  




STOPsignInWithFacebook(): Promise<any> {
  if (this.platform.is('cordova')) {
     this.facebook.login(['email', 'public_profile']).then(fbRes => {
      alert("TEST___8")
      const facebookCredential = firebase.auth.FacebookAuthProvider.credential(fbRes.authResponse.accessToken);
      //return firebase.auth().signInWithCredential(facebookCredential);
      return firebase.auth().signInWithCredential(facebookCredential).then(function(res) {
        var resJSON = JSON.stringify(res);
        alert("return res="+resJSON)
        var facebookUid = fbRes.authResponse.userID;
        var  firebaseUid = res.uid;
        alert("firebase displayname= "+res.displayName)
        alert("firebase email = "+res.email)
        alert("photoURL="+res.photoURL)
        alert("phoneNumber="+res.phoneNumber)
        alert("phoproviderId="+res.providerId)

        alert("facebookuserId ="+ facebookUid)
        alert("firebaseUid = "+firebaseUid)

 
        
        alert("END")
        //this.getUserDetail(facebookUid,firebaseUid,"fb");       4
        //return user;
      });
      
    })
  }
  else {
    return this.afAuth.auth
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(res => console.log(res));
  }
}
// signInWithFacebook(): Promise<any> {
//   if (this.platform.is('cordova')) {
//      this.facebook.login(['email', 'public_profile']).then(fbRes => {
//       alert("TEST___555")
//       const facebookCredential = firebase.auth.FacebookAuthProvider.credential(fbRes.authResponse.accessToken);
//       //return firebase.auth().signInWithCredential(facebookCredential);
//       return firebase.auth().signInWithCredential(facebookCredential).then(function(res) {
//         var facebookUid = fbRes.authResponse.userID;
//         var  firebaseUid = res.uid;
//         alert("facebookuserId ="+ facebookUid)
//         alert("firebaseUid = "+firebaseUid)
//         alert("firebase name= "+res.user.name)
//         alert("firebase email = "+res.user.email)

//         alert("END")
//         //this.getUserDetail(facebookUid,firebaseUid,"fb");       4
//         //return user;
//       });
      
//     })
//   }
//   else {
//     return this.afAuth.auth
//       .signInWithPopup(new firebase.auth.FacebookAuthProvider())
//       .then(res => console.log(res));
//   }
// }
getUserDetail(facebookUid,firebaseUid,authType) {
   alert("call getUserDetail")
  if(authType ==="fb"){
        alert("fb")

        this.facebook.api("/"+facebookUid+"/?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)", ["public_profile"])
        .then(res => {
          alert("then")
          this.userData = {email: res['email'],name: res['name'], first_name: res['first_name'], picture: res['picture_large']['data']['url']};
          var myJSON = JSON.stringify(this.userData);
              // this.users = res;
        alert("facebook user detail="+myJSON)
          firebase.database().ref('/userProfile').child(firebaseUid).once('value', function(snapshot) {
            alert("check user exist?")
            var exists = (snapshot.val() !== null);
            this.userExistsCallback(firebaseUid,this.userData.email,this.userData.picture,this.userData.name,exists);
          });
        })
        .catch(e => {
          alert("error="+e)
          console.log(e);
        });
  }else if(authType === "google"){
        alert("google")
  }else{
    alert("authType error")
  }

}
///%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%//
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%//

 updateUserProfile(uid,displayName,email,photo,phone){
  alert("call userExistCallBack")
  firebase.database().ref('/userProfile').child(uid).once('value', function(snapshot) {
    var exists = (snapshot.val() !== null);
   
      if (exists) {
        alert('user ' + uid + ' exists!');
        //var adaNameRef = firebase.database().ref('userProfile/userId');
        // Modify the 'first' and 'last' properties, but leave other data at
        // adaNameRef unchanged.
        firebase.database().ref('userProfile/'+uid).update({ 
          name: displayName,
          email: email,
          photo: photo,
          phone:phone
        });
        alert("end update")
          // this.category.update(userId, {
          //   title: data.title,
          //   description: data.description
          // });
          //firebase.database().ref('/userProfile').update(userId, { name: name });
          // firebase.database().ref('/userProfile').update(userId, { 
          //   title: "email",
          //   description: picture
          // });
      } else {
        alert('user ' + uid + ' does not exist!');
        // this.category.push({
        //   title: data.title,
        //   description:data.description
        // });
        firebase.database().ref('/userProfile').child(uid).set({
          
          name: displayName,
          email: email,
          photo: photo,
          phone:phone
        });
        alert("end SET")
      }
  });

 }
 userExistsCallback(firebaseUid,email,picture,name,exists) {
   alert("call userExistCallBack")
   alert("exist value="+exists)
  if (exists) {
    alert('user ' + firebaseUid + ' exists!');
    //var adaNameRef = firebase.database().ref('userProfile/userId');
    // Modify the 'first' and 'last' properties, but leave other data at
    // adaNameRef unchanged.
    firebase.database().ref('userProfile/'+firebaseUid).update({ 
      name: name,
      email: email,
      picture: picture,
      phoneNumber:'0734211321'
    });
      // this.category.update(userId, {
      //   title: data.title,
      //   description: data.description
      // });
      //firebase.database().ref('/userProfile').update(userId, { name: name });
      // firebase.database().ref('/userProfile').update(userId, { 
      //   title: "email",
      //   description: picture
      // });
  } else {
    alert('user ' + firebaseUid + ' does not exist!');
    // this.category.push({
    //   title: data.title,
    //   description:data.description
    // });
    firebase.database().ref('/userProfile').child(firebaseUid).set({
      
      name: name,
      email: email,
      picture: picture,
      phoneNumber:'0734211321'
    });
  }
}
// Tests to see if /users/<userId> has any data. 
// checkIfUserExists(userId) {
//   //var usersRef = new Firebase(USERS_LOCATION);
//   firebase.database().ref('/userProfile').child(userId).once('value', function(snapshot) {
//     var exists = (snapshot.val() !== null);
//     this.userExistsCallback(userId, exists);
//   });
// }




////////////////// Google plus login /////////////////////////////


// googleLogin(){
  
//   let loadingPopup = this.loadingCtrl.create({
//   spinner: 'crescent', 
//   content: ''
//   });
//   loadingPopup.present();
  
  
  
  
//   this.googleplus.login({
//       'webClientId':'134053776757-rj2vajjm340t2bilpencqq4hh1j76sv5.apps.googleusercontent.com',
//       'offline': true
//   }).then(res =>{
//       return firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
//             .then(success =>{
//                 alert("Google login successfully")
//                 this.displayName = res.displayName;
//                 this.email = res.email;
//                 this.familyName = res.familyName;
//                 this.givenName = res.givenName;
//                 this.userId = res.userId;
//                 this.imageUrl = res.imageUrl;
//                 alert("displayname="+this.displayName +this.email+this.imageUrl+ this.familyName )
//                 loadingPopup.dismiss();
//                 this.navCtrl.setRoot('AfterLoginPage');
        
//             }).catch(error =>{
//                 loadingPopup.dismiss().then( () => {
//                   alert("Error line 138"+error)
//                 });
//             })
  
//       // add catch error here
//           //loadingPopup.dismiss();
//   }).catch(error =>{
//     loadingPopup.dismiss().then( () => {
//       alert("line 143")
//       alert("Error"+error)
//     });
//   })
//   }






  loginUser(newEmail: string, newPassword: string): Promise<any> {
    return this.afAuth.auth.signInWithEmailAndPassword(newEmail,newPassword)
  }

  resetPassword(email: string):Promise<any> {
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }

  logoutUser(): Promise<any> {
    return this.afAuth.auth.signOut();
  }

  
  registerUser(name: string, email: string, password: string,phone: number): Promise<any> {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password).then((newUser) => {
      firebase.database().ref('/userProfile').child(newUser.uid).set({
          email: email,
          name: name,
          phone: phone
      });
    });
  }

}

