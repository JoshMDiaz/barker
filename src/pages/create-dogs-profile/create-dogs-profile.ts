import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, LoadingController } from "ionic-angular";
import { ProfileModel } from "../../models/profile";
import { DogModel } from "../../models/dog";
import { AngularFireAuth } from "angularfire2/auth";
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/map";
import { AuthData } from "../../providers/auth-data";
import { AngularFireDatabase } from "angularfire2/database-deprecated";
import { FileTransfer, FileTransferObject, FileUploadOptions } from "@ionic-native/file-transfer";

@IonicPage()
@Component({
  selector: "page-create-dogs-profile",
  templateUrl: "create-dogs-profile.html"
})
export class CreateDogsProfilePage {
  profile = {} as ProfileModel;
  dogs: Array<any> = [];
  uid: string;
  email: string;
  numberOfDogs: number;
  breeds: Array<string>;
  months: Array<string>;
  days: Array<number> = [];
  years: Array<number> = [];
  imageFileName: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public afAuth: AngularFireAuth,
    private http: Http,
    private authData: AuthData,
    public afDb: AngularFireDatabase,
    private transfer: FileTransfer,
    public loadingCtrl: LoadingController
  ) {}

  createProfile(dogs) {
    dogs.forEach(dog => {
      this.authData.updateDogsProfile(
        dog.name,
        dog.breed,
        dog.gender,
        dog.eyes,
        dog.fixed,
        dog.couldBreed,
        dog.papered,
        dog.registered,
        dog.description || "",
        dog.birthdate,
        this.uid,
        dog.photos || [""],
        dog.profileImg || ""
      );
    });
    this.createUserProfile(dogs);
  }

  createUserProfile(dogs) {
    this.authData.updateUserProfile(
      this.uid,
      this.profile.name,
      this.email,
      this.profile.photo || "",
      this.profile.city,
      this.profile.state,
      this.profile.description || "",
      dogs.length,
      true
    );
    this.uploadFile(this.navParams.data.imageURI, 'user-profile');
  }

  addEmptyDogs(num) {
    this.dogs = [];
    for (let i = 0; i < num; i++) {
      this.dogs.push({
        name: "",
        breed: "",
        gender: "",
        eyes: "",
        fixed: null,
        couldBreed: null,
        papered: null,
        registered: null,
        description: "",
        birthdate: "",
        photos: []
      });
    this.uploadFile(this.navParams.data.imageURI, `dog-profile-${{i}}`);
    }
  }

  uploadFile(imageURI, name) {
    let loader = this.loadingCtrl.create({
      content: "Uploading..."
    });
    loader.present();
    const fileTransfer: FileTransferObject = this.transfer.create();

    let options: FileUploadOptions = {
      fileKey: 'ionicfile',
      fileName: 'ionicfile',
      chunkedMode: false,
      mimeType: "image/jpeg",
      headers: {}
    }

    fileTransfer.upload(imageURI, 'http://192.168.0.7:8080/api/uploadImage', options)
      .then((data) => {
      this.imageFileName = `http://192.168.0.7:8080/static/images/${{name}}.jpg`
      loader.dismiss();
    }, (err) => {
      console.log(err);
      loader.dismiss();
    });
  }

  ionViewDidLoad() {
    if (this.navParams.data && this.navParams.data.profileData) {
      this.profile = this.navParams.data.profileData;
    }
    this.afAuth.authState.subscribe(userAuth => {
      if (userAuth) {
        this.uid = userAuth.uid;
        this.email = userAuth.email;
      }
    });

    this.http
      .get("/assets/data/breeds.json")
      .map(data => data.json())
      .subscribe(data => {
        this.breeds = data;
      });
  }
}
