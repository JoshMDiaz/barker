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
    fixed: boolean;
    eyes: string;
    papered: boolean;
    registered: boolean;
    description: string;
    birthdate: string;
    photos: Array<string>;
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    public afDB: AngularFireDatabase
  ) {
    this.dogProfile = this.navParams.data.dog;
    // let loadingPopup = this.loadingCtrl.create({
    //   spinner: 'crescent',
    //   content: ''
    // });
    // loadingPopup.present();

    // this.profile = afDB.object('/profile/1');
    // this.friends = afDB.list('/profile/1/friends');
    // this.imgGallery = afDB.list('/gallery');
    // this.imgGallery.subscribe(imgGallery => {
    //     this.imgGalleryArray = imgGallery;
    //     loadingPopup.dismiss()
    // })
  }

  toggleInterest() {
    console.log("interested");
  }

  toggleFavorite() {
    console.log("favorited");
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
}
