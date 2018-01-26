import { Component,ViewChild,ElementRef  } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController,ViewController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import 'rxjs/add/operator/map'; // you might need to import this, or not depends on your setup
declare var google;

@IonicPage()
@Component({
  selector: 'page-map-marker',
  templateUrl: 'map-marker.html'
})

export class MapMarkerPage {
  @ViewChild('map') mapElement: ElementRef;
  items: any[] = [];
  map: any;
  markerSelected: boolean = false;

  //******************** Map style  **************************//
  //*****  Ggo to snazzymaps.com for mor map styles  ********//
  //**********************************************************//
  mapStyle: any = [{"featureType":"landscape.man_made","elementType":"all","stylers":[{"color":"#faf5ed"},{"lightness":"0"},{"gamma":"1"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#bae5a6"}]},{"featureType":"road","elementType":"all","stylers":[{"weight":"1.00"},{"gamma":"1.8"},{"saturation":"0"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"hue":"#ffb200"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"lightness":"0"},{"gamma":"1"}]},{"featureType":"transit.station.airport","elementType":"all","stylers":[{"hue":"#b000ff"},{"saturation":"23"},{"lightness":"-4"},{"gamma":"0.80"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#a0daf2"}]}];

  //mapStyle: any = [{"featureType":"all","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"all","elementType":"labels","stylers":[{"visibility":"off"},{"saturation":"-100"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40},{"visibility":"off"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"off"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#4d6059"}]},{"featureType":"landscape","elementType":"geometry.stroke","stylers":[{"color":"#4d6059"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"color":"#4d6059"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"lightness":21}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#4d6059"}]},{"featureType":"poi","elementType":"geometry.stroke","stylers":[{"color":"#4d6059"}]},{"featureType":"road","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#7f8d89"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#7f8d89"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#7f8d89"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#7f8d89"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#7f8d89"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#7f8d89"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"#7f8d89"}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"color":"#7f8d89"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#2b3638"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#2b3638"},{"lightness":17}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#24282b"}]},{"featureType":"water","elementType":"geometry.stroke","stylers":[{"color":"#24282b"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels.icon","stylers":[{"visibility":"off"}]}];

  public infoWindows: any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController ,public viewCtrl: ViewController, public afDB: AngularFireDatabase) {    
    let loadingPopup = this.loadingCtrl.create({
      spinner: 'crescent',
      content: ''
    });
    loadingPopup.present();
    this.afDB.list('/map').subscribe(mapList => {
        this.items = mapList;
        loadingPopup.dismiss();  
    })
  }

  ionViewDidLoad() {
    this.displayGoogleMap();
  }

  displayGoogleMap() {
    let latLng = new google.maps.LatLng(13.801532791932946, 100.54677690766607);
    let mapOptions = {
        center: latLng,
        zoom: 3,
        styles: this.mapStyle,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.addMarkersToMap()
  }

  addMarkersToMap() {
    for(let items of this.items) {
      var position = new google.maps.LatLng(items.lat, items.lng);
      var mapMarker = new google.maps.Marker({
            position: position,
            animation: google.maps.Animation.DROP,
            markerSelected : true,
            title: items.name,
            email: items.email,
            web: items.web,
            phone: items.phone,
            //**** Custom Marker Symbols ****/
            //icon:  'assets/red_pin72x96.png'
            icon: {
                    url: 'assets/red_pin72x96.png',
                    //The size image file.
                    size: new google.maps.Size(72, 96),
                    // we want to render @ 30x30 logical px (@2x dppx or 'Retina')
                    scaledSize: new google.maps.Size(40, 52), 
                    //The point on the image to measure the anchor from. 0, 0 is the top left.
                    origin: new google.maps.Point(0, 0),
                    //The x y coordinates of the anchor point on the marker. e.g. If your map marker was a drawing pin then the anchor would be the tip of the pin.
                    anchor: new google.maps.Point(20, 40),
                    labelOrigin: new google.maps.Point(20, 12)
                },
                anchorPoint: new google.maps.Point(0, -40)
      });
      mapMarker.setMap(this.map);
      this.addInfoWindowToMarker(mapMarker);
      this.map.setCenter(position);
    }
  
  }

  addInfoWindowToMarker(marker) {

      var infoWindowContent = '<div id="iw-container">' +               
                                  '<div class="iw-content">' +
                                        '<div class="iw-subTitle">'+marker.title+'</div>' +                                  
                                        '<br><b>Phone: </b> '+marker.phone+'<br><b>E-mail: </b>'+marker.email+'<br><b>Website: </b> '+marker.web+'</p>'+
                                  '</div>' +
                                  //'<div id="do-something-button">button</div>' +
                              '</div>';    

      var infoWindow = new google.maps.InfoWindow();
          // infoWindow.setOptions({
          //     disableAutoPan:false
          // }); 
          infoWindow.setContent(infoWindowContent);

          marker.addListener('click', () => {
                this.closeAllInfoWindows();
                infoWindow.open(this.map, marker);
                // add listener that will capture the click event of the infoWindow
                // google.maps.event.addListener(infoWindow, 'domready', () => {
                //   document.getElementById('do-something-button').addEventListener('click', () => {
                //      this.doSomething();
                //   });
                // }); 

          });
          this.infoWindows.push(infoWindow);
  }

  doSomething(){
    console.log("doSomething");
  }

  closeAllInfoWindows() {
      for(let window of this.infoWindows) { 
        window.close();
      }
  }
 
  dismiss() {
   this.viewCtrl.dismiss();
  }

}
