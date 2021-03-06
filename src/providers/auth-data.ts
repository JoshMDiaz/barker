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

  setUserProfileField(uid, field, value) {
    let obj = {};
    obj[field] = value;
    firebase
      .database()
      .ref("/userProfiles")
      .child(uid)
      .update(obj);
  }

  updateUserProfile(
    uid,
    displayName,
    email,
    photo,
    city,
    state,
    description,
    numOfDogs,
    registered,
    favorites
  ) {
    firebase
      .database()
      .ref("/userProfiles")
      .child(uid)
      .once("value", function(snapshot) {
        var exists = snapshot.val() !== null;

        if (exists) {
          console.log("user " + uid + " exists!");
          firebase
            .database()
            .ref("userProfiles/" + uid)
            .update({
              name: displayName,
              email: email,
              photo: photo,
              city: city,
              state: state,
              description: description,
              numOfDogs: numOfDogs,
              registered: registered,
              favorites: favorites
            });
        } else {
          console.log("user " + uid + " does not exist!");
          firebase
            .database()
            .ref("/userProfiles")
            .child(uid)
            .set({
              name: displayName,
              email: email,
              photo: photo,
              city: city,
              state: state,
              description: description,
              numOfDogs: numOfDogs,
              registered: registered
            });
        }
      });
  }

  updateDogsProfile(
    name,
    breed,
    gender,
    eyes,
    fixed,
    couldBreed,
    papered,
    registered,
    description,
    birthdate,
    ownerId,
    photos,
    profileImg
  ) {
    firebase
      .database()
      .ref("/")
      .child('dogProfiles')
      .once("value", function(snapshot) {
        var exists = snapshot.val() !== null;

        if (exists) {
          firebase
            .database()
            .ref("/")
            .child("dogProfiles")
            .push({
              name: name,
              breed: breed,
              gender: gender,
              eyes: eyes,
              fixed: fixed,
              couldBreed: couldBreed,
              papered: papered,
              registered: registered,
              description: description,
              birthdate: birthdate,
              ownerId: ownerId,
              photos: photos,
              profileImg: profileImg
            });
        } else {
          firebase
            .database()
            .ref("/")
            .child("dogProfiles")
            .push({
              name: name,
              breed: breed,
              gender: gender,
              eyes: eyes,
              fixed: fixed,
              couldBreed: couldBreed,
              papered: papered,
              registered: registered,
              description: description,
              birthdate: birthdate,
              ownerId: ownerId,
              photos: photos,
              profileImg: profileImg
            });
        }
      });
  }

  updateUserProfileFB(uid, displayName, email, photo) {
    firebase
      .database()
      .ref("/userProfiles")
      .child(uid)
      .once("value", function(snapshot) {
        var exists = snapshot.val() !== null;

        if (exists) {
          console.log("user " + uid + " exists!");
          firebase
            .database()
            .ref("userProfiles/" + uid)
            .update({
              name: displayName,
              email: email,
              photo: photo
            });
        } else {
          console.log("user " + uid + " does not exist!");
          firebase
            .database()
            .ref("/userProfiles")
            .child(uid)
            .set({
              name: displayName,
              email: email,
              photo: photo
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

  registerUser(email: string, password: string): Promise<any> {
    return this.afAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then(newUser => {
        firebase
          .database()
          .ref("/userProfiles")
          .child(newUser.uid)
          .set({
            email: email
          });
      });
  }
}
