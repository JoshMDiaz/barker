import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AuthData } from "../../providers/auth-data";
import { Http, Response } from "@angular/http";
import { ProfileModel } from "../../models/profile";
import "rxjs/add/operator/map";
import { AlertController } from "ionic-angular/components/alert/alert-controller";
import { Camera, CameraOptions } from "@ionic-native/camera";
import { storage } from "firebase";

@IonicPage()
@Component({
  selector: "page-create-profile",
  templateUrl: "create-profile.html"
})
export class CreateProfilePage {
  profile = {} as ProfileModel;
  email: string;
  uid: string;
  usStates: Array<{
    name: string;
    abbreviation: string;
  }>;
  breeds: Array<string>;
  isShowAboutDog: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: Http,
    private authData: AuthData,
    private alertCtrl: AlertController,
    private camera: Camera
  ) {
    this.profile.dogs = [];
    // TODO: remove the OR from the email and uid
    this.email = this.navParams.data.email || 'nodogs@test.com';
    this.uid = this.navParams.data.uid || 'CzEe3rEBlSSgooQR62ti6AJQUjm1';
  }

  createProfile(profileData) {
    this.authData.updateUserProfile(
      this.uid,
      profileData.name,
      this.email,
      profileData.photo || "",
      profileData.city,
      profileData.numberOfDogs,
      profileData.state,
      profileData.dogs,
      profileData.description || ""
    );
    this.navCtrl.setRoot('LookingForPage');
  }

  takePhoto() {
    try {
      const options: CameraOptions = {
        quality: 50,
        targetHeight: 600,
        targetWidth: 600,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        correctOrientation: true
      }
      const result = this.camera.getPicture(options);
      const image = `data:image/jpeg;base64,${result}`;
      const pictures = storage().ref('pictures');
      pictures.putString(image, 'data_url');

    } catch (error) {

    }
  }

  goBack() {
    let alert = this.alertCtrl.create({
      title: "Are you sure?",
      message:
        "Going back will clear all data about dogs. Are you sure you want to go back?",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          handler: () => {}
        },
        {
          text: "Go Back",
          handler: () => {
            this.isShowAboutDog = false;
          }
        }
      ]
    });
    alert.present();
  }

  showAboutDog() {
    if (this.profile.numberOfDogs > 0) {
      this.profile.dogs = [];
      for (let i = 0; i < this.profile.numberOfDogs; i++) {
        this.profile.dogs.push({
          name: "",
          age: null,
          breed: "",
          gender: "",
          fixed: false,
          papered: false,
          registered: false,
          description: '',
          photos: []
        });
      }
      this.isShowAboutDog = true;
    } else {
      let alert = this.alertCtrl.create({
        title: "Missing dogs",
        subTitle: "Please tell us how many dogs you would like to sign up.",
        buttons: ["Ok"]
      });
      alert.present();
    }
  }

  ionViewDidLoad() {
    this.http
      .get("/assets/data/states.json")
      .map(data => data.json())
      .subscribe(data => {
        this.usStates = data;
      });
    this.http
      .get("/assets/data/breeds.json")
      .map(data => data.json())
      .subscribe(data => {
        this.breeds = data;
      });
  }
}
