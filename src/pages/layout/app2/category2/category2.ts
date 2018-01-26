import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import { AngularFireDatabase} from 'angularfire2/database-deprecated';



@IonicPage()
@Component({
  selector: 'page-category2',
  templateUrl: 'category2.html'
})
export class Category2Page {
  category: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController, public afDB: AngularFireDatabase) {

      let loadingPopup = this.loadingCtrl.create({
        spinner: 'crescent',
        content: ''
      });
      loadingPopup.present();

      this.afDB.list('/category', {query: {
          orderByChild: "type",
          equalTo: "ecom" 
      }}).subscribe(categoryItems => {
        this.category = categoryItems;
        loadingPopup.dismiss()
      });
  }

  openList(categoryId){
      this.navCtrl.push('List2Page',{categoryId:categoryId}); 
  }

}
