import { Component, ChangeDetectorRef  } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController , LoadingController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable , FirebaseObjectObservable} from 'angularfire2/database-deprecated';
import 'rxjs/add/operator/map'; // you might need to import this, or not depends on your setup

@IonicPage()
@Component({
  selector: 'page-detail3',
  templateUrl: 'detail3.html'
})
export class Detail3Page {

  itemId: any;
  item: FirebaseObjectObservable<any[]>;
  itemOption: FirebaseListObservable<any[]>;
  itemSize: FirebaseListObservable<any[]>;

  itemOptionArray: any=[]; 
  itemSizeArray: any=[]; 

  //*********** Variables for fading header **************//
  showToolbar:boolean = false;
  transition:boolean = false;
  headerImgSize:string = '100%';
  headerImgUrl:string = '';
  //****************************//

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public afDB: AngularFireDatabase,public ref: ChangeDetectorRef,private toastCtrl: ToastController) {
     
      let loadingPopup = this.loadingCtrl.create({
        spinner: 'crescent', 
        content: ''
      });
      loadingPopup.present();     

      this.itemId = this.navParams.get('itemId');
      this.item = afDB.object('/list/'+this.itemId );

      this.itemOption = afDB.list('/list/'+this.itemId+'/options' );
      this.itemOption.subscribe(itemOption => {
          this.itemOptionArray = itemOption; 
      })

      this.itemSize = afDB.list('/list/'+this.itemId+'/size' );
      this.itemSize.subscribe(itemSize => {
          this.itemSizeArray = itemSize;
          loadingPopup.dismiss();
      })

  }
 //*********** Fading header  **************/
  onScroll($event: any){
        let scrollTop = $event.scrollTop;
        this.showToolbar = scrollTop >= 100;
        if(scrollTop < 0){
            this.transition = false;
            this.headerImgSize = `${ Math.abs(scrollTop)/2 + 100}%`;
        }else{
            this.transition = true;
            this.headerImgSize = '100%'
        }
        this.ref.detectChanges();
  }

 //*********** Add to cart**************/
  addToCart(position: string) {
    const toast = this.toastCtrl.create({
        message: 'Item was added',
        position: position,
        duration: 3000
    });
    toast.onDidDismiss(this.dismissHandler);
    toast.present();
  }
  private dismissHandler() {
    console.info('Toast onDidDismiss()');
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Detail1Page');


  }

}
