import { Component, ChangeDetectorRef  } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ViewController} from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable , FirebaseObjectObservable} from 'angularfire2/database-deprecated';

@IonicPage()
@Component({
  selector: 'page-map-sub-detail',
  templateUrl: 'map-sub-detail.html'
})
export class MapSubDetailPage {
  mapId: any;
  map: FirebaseObjectObservable<any[]>;

  //****** Variables for fading header *******//
  showToolbar:boolean = false;
  transition:boolean = false;
  headerImgSize:string = '100%';
  headerImgUrl:string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public afDB: AngularFireDatabase,public ref: ChangeDetectorRef, public viewCtrl: ViewController, public loadingCtrl: LoadingController) {
    let loadingPopup = this.loadingCtrl.create({
        spinner: 'crescent',
        content: ''
    });
    loadingPopup.present();   
    this.mapId = this.navParams.get('mapId');
    this.map = afDB.object('/map/'+this.mapId );
    this.map.subscribe(() => loadingPopup.dismiss());
  }

    closeModal() {
        this.viewCtrl.dismiss();
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

}
