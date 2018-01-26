import { Component, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable , FirebaseObjectObservable} from 'angularfire2/database-deprecated';
import 'rxjs/add/operator/map'; // you might need to import this, or not depends on your setup

//*********** Import image gallery **************//
import { GalleryModal } from 'ionic-gallery-modal';


@IonicPage()
@Component({
  selector: 'page-detail1',
  templateUrl: 'detail1.html'
})
export class Detail1Page {
  rate: any  ;
  favorite: boolean = false;


  //*********** Variables for fading header **************//
  showToolbar:boolean = false;
  transition:boolean = false;
  // headerImgSize:string = '100%';
  // headerImgUrl:string = '';
  //****************************//

  itemId: any;
  item: FirebaseObjectObservable<any[]>;
  itemImages: FirebaseListObservable<any[]>;
  imgGallery : any=[]; 

  
  photos: any[] = [];

  constructor( public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController, public afDB: AngularFireDatabase , private toastCtrl: ToastController ,public ref: ChangeDetectorRef) {
    
      this.itemId = this.navParams.get('itemId');
      this.item = afDB.object('/list/'+this.itemId );
      
      this.itemImages = afDB.list('/list/'+this.itemId+'/images' );
      this.itemImages.subscribe(imgGallery => {
            this.imgGallery = imgGallery;
      })

  }

  //*********** Fading header  **************/
  onScroll($event: any){
        let scrollTop = $event.scrollTop;
        this.showToolbar = scrollTop >= 100;
        if(scrollTop < 0){
            this.transition = false;
            //this.headerImgSize = `${ Math.abs(scrollTop)/2 + 100}%`;
        }else{
            this.transition = true;
           // this.headerImgSize = '100%'
        }
        this.ref.detectChanges();
  }


 showMap(categoryId) {
    console.log("==========CategoryId="+categoryId)
    let mapModal = this.modalCtrl.create('ListMap1Page', { 
      categoryId:categoryId
    });
    mapModal.present();
 }

//*********** Open full image **************/
openFullImage(getIndex) {
  //console.log("NEW ==== getIndex="+getIndex);
  let modal = this.modalCtrl.create(GalleryModal,  {
      // For multiple images //
      photos:   this.imgGallery ,
      // For single image //
      // photos: [{url:getImage}], 
     closeIcon: 'close-circle',
     initialSlide: getIndex 
    });
    // console.log("getIndex="+getIndex);
  modal.present();
 }

  addToFav() {
    this.favorite = !this.favorite;
    this.presentToast('bottom','Add to Favorite');
  }


  presentToast(position: string,message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      position: position,
      duration: 1000
    });
  toast.onDidDismiss(this.dismissHandler);
  toast.present();
  }

  private dismissHandler() {
    console.info('Toast onDidDismiss()');
  }

}
