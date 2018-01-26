import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController, ToastController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable , FirebaseObjectObservable} from 'angularfire2/database-deprecated';

import 'rxjs/add/operator/map'; // you might need to import this, or not depends on your setup

@IonicPage()
@Component({
  selector: 'page-detail2',
  templateUrl: 'detail2.html'
})
export class Detail2Page {

  itemId: any;
  item: FirebaseObjectObservable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController,public afDB: AngularFireDatabase ,private toastCtrl: ToastController) {
      this.itemId = this.navParams.get('itemId');
      console.log("++++++itemId="+this.navParams.get('itemId'));

      let loadingPopup = this.loadingCtrl.create({
        spinner: 'crescent',
        content: ''
      });
      loadingPopup.present();
      this.item = afDB.object('/list/'+this.itemId );
      loadingPopup.dismiss();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Detail1Page');
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

}
