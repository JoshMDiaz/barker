import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AuthData } from "../../providers/auth-data";
import { Http, Response } from "@angular/http";
import { ProfileModel } from "../../models/profile";
import "rxjs/add/operator/map";
import { Camera, CameraOptions } from "@ionic-native/camera";
import { FileTransfer } from "@ionic-native/file-transfer";
import firebase from 'firebase';

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
  disabled: boolean = true;
  profileImg: any;
  imgRef: any;
  imageUrl: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: Http,
    private authData: AuthData,
    private camera: Camera,
    private transfer: FileTransfer
  ) {
    this.email = this.navParams.data.email;
    this.uid = this.navParams.data.uid;
    this.imgRef = firebase.storage().ref('/');
  }

  addDogs(profileData) {
    this.navCtrl.push("CreateDogsProfilePage", { profileData: profileData });
  }

  getImage() {
    const options: CameraOptions = {
      // Gallery options
      // quality: 100,
      // destinationType: this.camera.DestinationType.FILE_URI,
      // sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
      // Take picture options
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      // mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA,
      saveToPhotoAlbum: true
    }
    this.camera.getPicture(options).then((imageData) => {
      // this.profileImg = 'data:image/jpeg;base64,' + imageData;
      this.profileImg = imageData;
      this.uploadImage();
    }, (err) => {
      console.log(err);
    });
  }

  uploadImage() {
    this.imgRef.child(this.uid).child('profile-image.jpg').putString(this.profileImg, 'base64', {contentType: 'image/jpg'})
    .then(savedPic => {
      this.imageUrl = savedPic.downloadUrl;
    })
  }

  // takePhoto() {
  //   try {
  //     const options: CameraOptions = {
  //       quality: 50,
  //       targetHeight: 600,
  //       targetWidth: 600,
  //       destinationType: this.camera.DestinationType.DATA_URL,
  //       encodingType: this.camera.EncodingType.JPEG,
  //       mediaType: this.camera.MediaType.PICTURE,
  //       correctOrientation: true
  //     };
  //     const result = this.camera.getPicture(options);
  //     const image = `data:image/jpeg;base64,${result}`;
  //     const pictures = storage().ref("pictures");
  //     pictures.putString(image, "data_url");
  //   } catch (error) {}
  // }

  ionViewDidLoad() {
    this.http
      .get("/assets/data/states.json")
      .map(data => data.json())
      .subscribe(data => {
        this.usStates = data;
      });
  }
}
