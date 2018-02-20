import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController,
  ToastController
} from "ionic-angular";
import {
  AngularFireDatabase,
  FirebaseListObservable,
  FirebaseObjectObservable
} from "angularfire2/database-deprecated";
import { ModalController } from "ionic-angular/components/modal/modal-controller";

@IonicPage()
@Component({
  selector: "page-dog-profile",
  templateUrl: "dog-profile.html"
})
export class DogProfilePage {
  // profile:  FirebaseObjectObservable<any[]>;
  // imgGallery: FirebaseListObservable<any[]>;
  // friends:  FirebaseListObservable<any[]>;
  // imgGalleryArray : any=[];

  segmentView: string = "one";
  messageSent: boolean = false;
  dogProfile: {
    name: string;
    breed: string;
    gender: string;
    eyes: string;
    fixed: boolean;
    couldBreed: boolean;
    papered: boolean;
    registered: boolean;
    description: string;
    birthdate: string;
    ownerId: string;
    photos: Array<string>;
    profileImg: string;
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    public afDB: AngularFireDatabase,
    public modalCtrl: ModalController
  ) {
    this.dogProfile = this.navParams.data.dogProfile;
  }

  toggleFavorite() {
    console.log("favorited");
  }

  openGalleryModal() {
    
  }

  message() {
    this.messageSent = !this.messageSent;
    this.presentToast("bottom", "message user clicked");
  }

  presentToast(position: string, message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      position: position,
      duration: 1000
    });
    toast.present();
  }

  ionViewDidLoad() {
    console.log(this.navParams.data);
  }
}
