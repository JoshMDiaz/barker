import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';

//***********  ionic-native **************/
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;
  rootPage: string = 'IntroPage';
  menu:Array<any> = [];
  pages: Array<any>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    this.menu = [          

        {
          title: 'Layout with firebase',
          myicon:'',
          iconLeft: 'ios-filing',
          icon: 'ios-add-outline',
          showDetails: false,
          items:  [
                
              {name:'Authentication(Login)',component:'MainPage'},
              {name:'Authentication(Register)',component:'RegisterPage'},
              {name:'Authentication(Forgot)',component:'ForgotPage'},
              {name:'Authentication(Profile)',component:'AfterLoginPage'},
              {name:'Chart',component:'ChartPage'},

              {name:'City guide', component: 'Category1Page'},// app1 folder
              {name:'Shopping',component:'Category2Page'},// app2 folder
              {name:'Restaurant',component:'Category3Page'}, // app3 folder
              {name:'Google map',component: 'MapPage'},
              {name:'Image gallery',component: 'GalleryPage'},
              {name:'Feed',component: 'FeedPage'},
              {name:'Form',component: 'FormResultPage'},


              {name:'Intro', component:'IntroPage'},

              {name:'Pinterest(Masonry)',component: 'MasonryPage'},
              {name:'Profile1',component: 'ProfilePage'},
              {name:'Profile2',component: 'Profile2Page'},
              {name:'Profile3',component: 'Profile3Page'},
              {name:'Profile4', component: 'Profile4Page'},
              {name:'Radio player',component:'RadioListPage'},

              {name:'Search',component:'SearchPage'},
              {name:'Timeline',component: 'TimelinePage'}
          ]
        }, {
          title: 'Components',
          iconLeft: 'ios-copy',
          icon: 'ios-add-outline',
          showDetails: false,
          items:  [
                {name:'Accordion',component:'AccordionPage'},

                {name:'Action sheet',component:'ActionsheetPage'},
                {name:'Alert',component:'AlertPage'},
                {name:'Animation',component:'AnimationsPage'},

                {name:'Button',component:'ButtonPage'},
                {name:'Datetime',component:'DatetimePage'},
                {name:'Fab', component:'FabPage'},
                {name:'Fading header',component:'FadingHeaderPage' },
                {name:'Grid', component:'GridPage'},
                {name:'Header',component:'HeaderPage'},
                {name:'Input',component:'InputPage'},
                {name:'Item',component:'ItemPage'},
                {name:'Item sliding',component:'ItemSlidingPage'},
                {name:'Label',component:'LabelPage'},
                {name:'Radio button',component:'RadioButtonPage'},
                {name:'Rating',component:'RatingPage'},
                
                {name:'Range',component:'RangePage'},
                {name:'Search bar', component:'SearchBarPage'},
                {name:'Select option',component:'SelectOptionPage'},
                {name:'Segment',component:'SegmentPage'},
                {name:'Shrinking',component:'ShrinkingPage'},

                {name:'Tag',component:'TagPage'},
                {name:'Table',component:'TablePage'},
                {name:'Transparent header',component:'TransparentHeaderPage'},
                {name:'Toast',component:'ToastPage'}

            ]
        },{
          title: 'Theme',
          iconLeft: 'md-color-palette',
          icon: 'ios-add-outline',
          showDetails: false,
          items:  [
            {
            name:'Color',
            component:'ThemePage'
            }
          ]
        }
    ];

    this.pages = [ 
      // { icon:'call', title:'Contact us', component: 'ContactPage' },
      { icon:'bookmark', title:'Version 2.0.2', component: "MainPage" }    
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  toggleDetails(menu) {
    if (menu.showDetails) {
        menu.showDetails = false;
        menu.icon = 'ios-add-outline';
    } else {
        menu.showDetails = true;
        menu.icon = 'ios-remove-outline';
    }
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    // page.component = item array.component --> 
    //this.nav.setRoot(page.component);
    this.nav.setRoot(page.component);
  }

}
