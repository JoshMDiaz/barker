import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable , FirebaseObjectObservable} from 'angularfire2/database-deprecated';


@IonicPage()
@Component({
  selector: 'page-list2',
  templateUrl: 'list2.html'
})
export class List2Page {
  categoryId:any;
  items: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController,public afDB: AngularFireDatabase) {
      let loadingPopup = this.loadingCtrl.create({
        spinner: 'crescent',
        content: ''
      });
      loadingPopup.present();

      //this.categoryId = parseFloat(this.navParams.get('categoryId').toString());  
      this.categoryId =  parseInt(this.navParams.get('categoryId'));
      this.afDB.list('/list', {query: {
          orderByChild: "categoryId",
          equalTo: this.categoryId
      }}).subscribe(listItems => {
            this.items = listItems;
            loadingPopup.dismiss()
      });
}

  goToDetail(itemId){
      this.navCtrl.push('Detail2Page',{itemId:itemId}); 
  }


}
