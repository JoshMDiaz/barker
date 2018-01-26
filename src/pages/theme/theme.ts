import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-theme',
  templateUrl: 'theme.html'
})
export class ThemePage {
  mdColor:any[] = [];
  iosColor:any[] = [];
  flatColor:any[] = [];
  solarColor:any[] = [];
  tangoColor:any[] = [];

  miscColor:any[] = [];
  themeView: string = "tango";
  private color: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.color = 'solar-base01';
         
       this.mdColor = [
        {colorName:'red',colorCode:'#f44336'},
        {colorName:'pink',colorCode:'#EA1E63'},
        {colorName:'purple',colorCode:'#f44336'},
        {colorName:'deeppurple',colorCode:'#673ab7'},
        {colorName:'indigo',colorCode:'#3f51b5'},
        {colorName:'blue',colorCode:'#2196f3'},
        {colorName:'blue2',colorCode:'#0034a7'},
        {colorName:'lightblue',colorCode:'#03a9f4'},
        {colorName:'cyan',colorCode:'#00bcd4'},
        {colorName:'teal',colorCode:'#009688'},
        {colorName:'green',colorCode:'#4caf50'},
        {colorName:'lightgreen',colorCode:'#8dc34b'},
        {colorName:'lime',colorCode:'#cddc39'},       
        {colorName:'yellow',colorCode:'#ffeb3b'},
        {colorName:'amber',colorCode:'#ffc107'},
        {colorName:'orange',colorCode:'#ff9800'},
        {colorName:'deeporange',colorCode:'#ff5722'},
        {colorName:'brown',colorCode:'#795548'},       
        {colorName:'gray',colorCode:'#607d8b'},
        {colorName:'bluegray',colorCode:'#607D8B'},
        {colorName:'black',colorCode:'#000000'},
        {colorName:'white',colorCode:'#ffffff'}
      ];       
      this.iosColor = [
        {colorName:'ios-gray',colorCode:'#8e8e93'},
        {colorName:'ios-lightblue',colorCode:'#5ac8fa'},
        {colorName:'ios-blue',colorCode:'#007aff'},
        {colorName:'ios-yellow',colorCode:'#ffcc00'},
        {colorName:'ios-orange',colorCode:'#ff9500'},
        {colorName:'ios-pink',colorCode:'#ff2d55'},
        {colorName:'ios-green',colorCode:'#4cd964'},
        {colorName:'ios-red',colorCode:'#ff3b30'}
      ];      
      this.flatColor = [
        {colorName:'flat-turquoise',colorCode:'#1abc9c'},

        {colorName:'flat-green-sea',colorCode:'#16a085'},
        {colorName:'flat-emerald',colorCode:'#2ecc71'},
        {colorName:'flat-peter-river',colorCode:'#3498db'},
        {colorName:'flat-belize-hole',colorCode:'#2980b9'},
        {colorName:'flat-amethyst',colorCode:'#9b59b6'},
        {colorName:'flat-wisteria',colorCode:'#8e44ad'},
        {colorName:'flat-wet-asphalt',colorCode:'#34495e'},

     
        {colorName:'flat-midnight-blue',colorCode:'#2c3e50'},

 
        {colorName:'flat-sun-flower',colorCode:'#f1c40f'},
        {colorName:'flat-orange',colorCode:'#f39c12'},
        {colorName:'flat-carrot',colorCode:'#e67e22'},
        {colorName:'flat-pumpkin',colorCode:'#d35400'},
        {colorName:'flat-alizarin',colorCode:'#e74c3c'},
        {colorName:'flat-pomegrenade',colorCode:'#c0392b'},
        {colorName:'flat-clouds',colorCode:'#e67e22'},
        {colorName:'flat-silver',colorCode:'#bdc3c7'},
        {colorName:'flat-concrete',colorCode:'#95a5a6'},

 


        {colorName:'flat-asbesthos',colorCode:'#7f8c8d'}
      ];   


      this.solarColor = [

        {colorName:'solar-yellow',colorCode:'#b58900'},
        {colorName:'solar-orange',colorCode:'#cb4b16'},
        {colorName:'solar-red',colorCode:'#dc322f'},
        {colorName:'solar-magenta',colorCode:'#d33682'},
        {colorName:'solar-violet',colorCode:'#6c71c4'},
        {colorName:'solar-blue',colorCode:'#268bd2'},
        {colorName:'solar-base03',colorCode:'#002b36'},
        {colorName:'solar-base02',colorCode:'#073642'},
        {colorName:'solar-base01',colorCode:'#586e75'},
        {colorName:'solar-base00',colorCode:'#657b83'},
        {colorName:'solar-base0',colorCode:'#839496'},
        {colorName:'solar-base1',colorCode:'#93a1a1'},
        {colorName:'solar-base2',colorCode:'#eee8d5'},
        {colorName:'solar-base3',colorCode:'#fdf6e3'}
      ];   



      this.tangoColor = [
        {colorName:'tango-aluminium',colorCode:'#d3d7cf'},
        {colorName:'tango-butter',colorCode:'#edd400'},
        {colorName:'tango-chameleon',colorCode:'#73d216'},
        {colorName:'tango-orange',colorCode:'#f57900'},
        {colorName:'tango-chocolate',colorCode:'#c17d11'},
        {colorName:'tango-sky-blue',colorCode:'#3465a4'},
        {colorName:'tango-plum',colorCode:'#75507b'},
        {colorName:'tango-slate',colorCode:'#555753'},
        {colorName:'tango-scarlet-red',colorCode:'#cc0000'}
      ];
        
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ThemePage');
  }
  changeColor(color:string) {
      this.color = color;
    }
}
