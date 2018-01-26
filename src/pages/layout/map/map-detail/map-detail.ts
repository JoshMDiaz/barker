import { Component,ViewChild,ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams , AlertController , LoadingController, ToastController, ModalController , ViewController} from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { AngularFireDatabase , FirebaseObjectObservable} from 'angularfire2/database-deprecated';
declare var google;


@IonicPage()
@Component({
  selector: 'page-map-detail',
  templateUrl: 'map-detail.html'
})
export class MapDetailPage {

@ViewChild('map') mapElement: ElementRef;
  map: any;
  mapDetail: FirebaseObjectObservable<any>;

  //***********  Map style  **************//
  //*****  For more map styles    ********//
  //*****  Go to snazzymaps.com   ********//
  mapStyle: any = [{"featureType":"landscape.man_made","elementType":"all","stylers":[{"color":"#faf5ed"},{"lightness":"0"},{"gamma":"1"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#bae5a6"}]},{"featureType":"road","elementType":"all","stylers":[{"weight":"1.00"},{"gamma":"1.8"},{"saturation":"0"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"hue":"#ffb200"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"lightness":"0"},{"gamma":"1"}]},{"featureType":"transit.station.airport","elementType":"all","stylers":[{"hue":"#b000ff"},{"saturation":"23"},{"lightness":"-4"},{"gamma":"0.80"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#a0daf2"}]}];

  mapId: any;
  mapLat:number;
  mapLng:number;
  posLat:number;
  posLng:number;

  title: any;
  description: any;
  image: any
  markers: any=[]; 

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController,public modalCtrl: ModalController, public loadingCtrl: LoadingController,private toastCtrl: ToastController,public viewCtrl: ViewController, public afDB: AngularFireDatabase, private geolocation: Geolocation) {

    let loadingPopup = this.loadingCtrl.create({
        spinner: 'crescent',
        content: ''
    });
    loadingPopup.present();
    this.mapId = navParams.get('mapId');
    this.mapDetail = afDB.object("/map/"+this.mapId);
    this.mapDetail.subscribe(snapshots => {
          this.image = snapshots.image;
          this.title = snapshots.title;
          this.description  = snapshots.description;
          this.mapLat = snapshots.lat;
          this.mapLng = snapshots.lng;

          loadingPopup.dismiss();  
      });

  }

  ionViewDidLoad() {
    this.displayGoogleMap();
  }

  displayGoogleMap(){
    let latLng = new google.maps.LatLng(this.mapLat, this.mapLng);
    let mapOptions = {
        center: latLng,
        zoom: 15,
        styles: this.mapStyle,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.addMarkersToMap()
  }

  addMarkersToMap() {
      var position = new google.maps.LatLng(this.mapLat, this.mapLng);
      var mapMarker = new google.maps.Marker({
            position: position,
            animation: google.maps.Animation.DROP,
            markerSelected : true    
      });
      mapMarker.setMap(this.map);
      this.markers.push(mapMarker);
      this.map.setCenter(position);
  }

  calculateAndDisplayRoute() {
      let loadingPopup = this.loadingCtrl.create({
          spinner: 'crescent', 
          content: 'Finding...'
      });
      loadingPopup.present();
      // get current position//
      this.geolocation.getCurrentPosition().then((position) => {
            this.posLat = position.coords.latitude;
            this.posLng = position.coords.longitude;
            let directionsService = new google.maps.DirectionsService;
            let directionsDisplay = new google.maps.DirectionsRenderer({
                polylineOptions: { strokeColor: "#03a9f4"}
            });
            
            directionsDisplay.setMap(this.map);
            directionsService.route({
                origin: {lat:  this.posLat, lng: this.posLng},
                destination: {lat: this.mapLat, lng: this.mapLng},
                travelMode: 'DRIVING'
            }, function(response, status) {
                  if (status === 'OK') {

                    console.log("directionsService OK");
                    directionsDisplay.setDirections(response);
                    loadingPopup.dismiss();

                  } else {
                    
                    loadingPopup.dismiss();
                    alert("Directions request failed due to "+status)
                    console.log("Directions request failed due to "+status);
                  }
            });    
                  
        }, (err) => {

          loadingPopup.dismiss();
          alert("User denied Geolocation")
          console.log(err);
          
        });    

    }

  getCurrentLocation(){
        let loadingPopup = this.loadingCtrl.create({
            content: 'Finding...'
        });
        loadingPopup.present();

        this.geolocation.getCurrentPosition().then((position) => {
            console.log("getCurrentPosition : true");
            let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            this.map.setZoom(17);      // This will trigger a zoom_changed on the map
            this.map.setCenter(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
            
            let marker = new google.maps.Marker({
                map: this.map,
                icon: new google.maps.MarkerImage('//maps.gstatic.com/mapfiles/mobile/mobileimgs2.png',
                new google.maps.Size(22, 22),
                new google.maps.Point(0, 18),
                new google.maps.Point(11, 11)),
                position: latLng
            });

            let content = "<h5>You are here</h5>";
            this.addInfoWindow(marker, content);
            loadingPopup.dismiss();  

        }, (err) => {
            alert("User denied Geolocation")
            console.log(err);
            loadingPopup.dismiss();  

        });    

  }
 
  addInfoWindow(marker, content){
      let infoWindow = new google.maps.InfoWindow({
          content: content
      });
      google.maps.event.addListener(marker, 'click', () => {
          infoWindow.open(this.map, marker);
      });
  }
  
  showDetail(mapId) {
    let profileModal = this.modalCtrl.create('MapSubDetailPage', { 
        mapId: mapId
    });
    profileModal.present();
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

}
