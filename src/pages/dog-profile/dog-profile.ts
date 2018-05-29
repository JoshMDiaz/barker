import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController,
  ToastController,
  ModalController
} from "ionic-angular";
import {
  AngularFireDatabase,
  FirebaseListObservable,
  FirebaseObjectObservable
} from "angularfire2/database-deprecated";
import { GalleryModal } from "ionic-gallery-modal";
import { AngularFireAuth } from "angularfire2/auth";

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

  uid: string;
  segmentView: string = "one";
  messageSent: boolean = false;
  owner: any = [];
  profileArray: any = [];
  profile: FirebaseObjectObservable<any[]>;
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
    photos: Array<
      {
        url: string
      }
    >;
    profileImg: string;
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    public modalCtrl: ModalController,
    public afAuth: AngularFireAuth,
    public afDb: AngularFireDatabase
  ) {
    this.dogProfile = this.navParams.data.dogProfile;
  }

  seeProfile() {
    this.navCtrl.push("ProfilePage", {
      userId: this.navParams.data.dogProfile.ownerId
    });
  }

  fullscreenImage(getIndex) {
    let modal = this.modalCtrl.create(GalleryModal, {
      photos: this.dogProfile.photos,
      closeIcon: "close-circle",
      initialSlide: getIndex
    });
    modal.present();
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
    this.uid = this.navParams.data.uid;
    let loadingPopup = this.loadingCtrl.create({
      spinner: "crescent",
      content: ""
    });
    loadingPopup.present();
    this.profile = this.afDb.object("/userProfiles/" + this.uid);
    this.profile.subscribe(profile => {
      this.profileArray = profile;
    });
    this.afDb
      .object(`/userProfiles/${this.navParams.data.dogProfile.ownerId}`)
      .subscribe(owner => {
        this.owner = owner;
        loadingPopup.dismiss();
      });
  }
}
