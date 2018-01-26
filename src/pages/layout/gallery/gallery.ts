import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController,LoadingController  } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';

//*********** Import image gallery **************//
import { GalleryModal } from 'ionic-gallery-modal';


@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html'
})
export class GalleryPage {
  loaded: boolean ;
  imgGallery: FirebaseListObservable<any[]>;
  imgGalleryArray : any=[]; 

  photos: any[] = [];
  getIndex:number;

   //*********** View mode  **************/
  galleryView: string = "two";

  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController,  public modalCtrl: ModalController, public afDB: AngularFireDatabase) {
    let loadingPopup = this.loadingCtrl.create({
      spinner: 'crescent', 
      content: ''
    });
    loadingPopup.present();
    this.imgGallery = afDB.list('/gallery');
    this.imgGallery.subscribe(imgGallery => {
        this.imgGalleryArray = imgGallery;
        loadingPopup.dismiss()
    })
  }

  fullscreenImage(getIndex) {
    //console.log("NEW ==== getIndex="+getIndex);
    let modal = this.modalCtrl.create(GalleryModal,  {
        // For multiple images //
        photos:   this.imgGalleryArray ,
        // For single image //
        // photos: [{url:getImage}], 
      closeIcon: 'close-circle',
      initialSlide: getIndex 
      });
      // console.log("getIndex="+getIndex);
    modal.present();
  }


}
