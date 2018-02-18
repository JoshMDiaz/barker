import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController,
  LoadingController
} from "ionic-angular";
import {
  AngularFireDatabase,
  FirebaseListObservable
} from "angularfire2/database-deprecated";
import "rxjs/add/operator/map"; // you might need to import this, or not depends on your setup

@IonicPage()
@Component({
  selector: "page-feed",
  templateUrl: "feed.html"
})
export class FeedPage {
  feeds: FirebaseListObservable<any[]>;
  feedView: string = "activity";
  dogs: Array<any> = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public loadingCtrl: LoadingController,
    public afDb: AngularFireDatabase
  ) {
    let loadingPopup = this.loadingCtrl.create({
      spinner: "crescent",
      content: ""
    });
    loadingPopup.present();
    this.feeds = <FirebaseListObservable<any[]>>afDb
      .list("/feed")
      .map(feeds => {
        return feeds.map(feeds => {
          feeds.images = afDb.list("/feed/" + feeds.$key + "/images");
          loadingPopup
            .dismiss()
            .catch(() => console.log("ERROR CATCH: LoadingController dismiss"));
          return feeds;
        });
      });
    // this.afDb
    //   .list("/dogProfiles/", {
    //     query: {
    //       orderByChild: "ownerId",
    //       equalTo: !this.navParams.data.uid
    //     }
    //   })
    //   .subscribe(dogs => {
    //     this.dogs = dogs;
    //     loadingPopup
    //       .dismiss()
    //       .catch(() => console.log("ERROR CATCH: LoadingController dismiss"));
    //   });
  }

  ionViewDidLoad() {
    console.log(this.navParams);

  }
}
