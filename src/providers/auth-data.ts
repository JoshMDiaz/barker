import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase/app";

import { Platform } from "ionic-angular";

//***********  Facebook **************/
import { Facebook } from "@ionic-native/facebook";

//***********  Google plus **************/
import { GooglePlus } from "@ionic-native/google-plus";

@Injectable()
export class AuthData {
  userData: any;
  constructor(
    public afAuth: AngularFireAuth,
    private platform: Platform,
    private facebook: Facebook,
    private googleplus: GooglePlus
  ) {}

  signInWithPopupFacebook(): Promise<any> {
    return this.afAuth.auth
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(res => console.log(res));
  }

  signInWithFacebook(): Promise<any> {
    return this.facebook.login(["email", "public_profile"]).then(res => {
      const facebookCredential = firebase.auth.FacebookAuthProvider.credential(
        res.authResponse.accessToken
      );
      return firebase.auth().signInWithCredential(facebookCredential);
    });
  }

  signInWithGoogle(): Promise<any> {
    return this.googleplus
      .login({
        webClientId:
          "527910470763-g0pfa2k6qfaqm4qe6gqtv4ocjglciq68.apps.googleusercontent.com",
        offline: true
      })
      .then(res => {
        return firebase
          .auth()
          .signInWithCredential(
            firebase.auth.GoogleAuthProvider.credential(res.idToken)
          );
      });
  }

  updateUserProfile(
    uid,
    displayName,
    email,
    photo,
    phone,
    city,
    numberOfDogs,
    state,
    dogs,
    description
  ) {
    firebase
      .database()
      .ref("/userProfile")
      .child(uid)
      .once("value", function(snapshot) {
        var exists = snapshot.val() !== null;

        if (exists) {
          console.log("user " + uid + " exists!");
          firebase
            .database()
            .ref("userProfile/" + uid)
            .update({
              name: displayName,
              email: email,
              photo: photo,
              phone: phone,
              city: city,
              numberOfDogs: numberOfDogs,
              state: state,
              dogs: dogs,
              description: description
            });
        } else {
          console.log("user " + uid + " does not exist!");
          firebase
            .database()
            .ref("/userProfile")
            .child(uid)
            .set({
              name: displayName,
              email: email,
              photo: photo,
              phone: phone,
              city: city,
              numberOfDogs: numberOfDogs,
              state: state,
              dogs: dogs,
              description: description
            });
        }
      });
  }

  updateUserProfileFB(
    uid,
    displayName,
    email,
    photo,
    phone
  ) {
    firebase
      .database()
      .ref("/userProfile")
      .child(uid)
      .once("value", function(snapshot) {
        var exists = snapshot.val() !== null;

        if (exists) {
          console.log("user " + uid + " exists!");
          firebase
            .database()
            .ref("userProfile/" + uid)
            .update({
              name: displayName,
              email: email,
              photo: photo,
              phone: phone
            });
        } else {
          console.log("user " + uid + " does not exist!");
          firebase
            .database()
            .ref("/userProfile")
            .child(uid)
            .set({
              name: displayName,
              email: email,
              photo: photo,
              phone: phone
            });
        }
      });
  }

  loginUser(newEmail: string, newPassword: string): Promise<any> {
    return this.afAuth.auth.signInWithEmailAndPassword(newEmail, newPassword);
  }

  resetPassword(email: string): Promise<any> {
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }

  logoutUser(): Promise<any> {
    return this.afAuth.auth.signOut();
  }

  registerUser(
    email: string,
    password: string
  ): Promise<any> {
    return this.afAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then(newUser => {
        firebase
          .database()
          .ref("/userProfile")
          .child(newUser.uid)
          .set({
            email: email
          });
      });
  }
}
