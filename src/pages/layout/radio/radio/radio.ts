import {Component} from '@angular/core';
import { IonicPage, NavController,NavParams, LoadingController, ViewController, ModalController, AlertController } from 'ionic-angular';
import { AngularFireDatabase , FirebaseObjectObservable} from 'angularfire2/database-deprecated';
import { RadioPlayer } from '../../../../providers/radio-service';


@IonicPage()
@Component({
  selector: 'page-radio',
   templateUrl: 'radio.html'
  })
export class RadioPage {

  player:any;
  playing: boolean = false;
  radioId: any;
  radio: FirebaseObjectObservable<any>; 
  stationUrl: any;
  loadingPopup: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController,public loadingCtrl: LoadingController, public viewCtrl: ViewController , public afDB: AngularFireDatabase, public myplayer:RadioPlayer, public alertCtrl: AlertController) {
      // radio station list : http://www.radiosure.com/stations/
      this.radioId = this.navParams.get('radioId');
      this.radio = afDB.object('/radio/'+this.radioId );
      this.radio.subscribe(snapshots => {
          this.stationUrl = snapshots.url;            
      });
      this.player = myplayer;
      this.play(this.stationUrl);

  }

  ionViewDidLeave(){
   this.stop();
  }

  play(url) {
    this.loadingPopup = this.loadingCtrl.create({
        spinner: 'dots',
        content: ''
    });
    this.loadingPopup.present();
    console.log("play clicked");
    console.log(url);
    this.playing = !this.playing;
  	this.player.play(url).then(() => {
  		console.log('Return Playing');
      this.loadingPopup.dismiss();  
  	})
    .catch(error => {
      console.log("error="+error); 
      this.presentAlert("Error msg= "+error+"<br>Radio url = "+url);
      this.stop();
      this.playing = false;
      this.loadingPopup.dismiss();  
    });

  }

  pause() {
    this.playing = !this.playing;
  	this.player.pause();
  }

  stop() {
  	this.player.stop();
  }

  dismiss() {
   this.viewCtrl.dismiss();
  }

  presentAlert(title) {
    let alert = this.alertCtrl.create({
      title: title,
      buttons: ['OK']
    });
    alert.present();
  }
  
}