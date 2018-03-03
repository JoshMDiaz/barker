import { Component, ViewChild } from "@angular/core";
import { Nav, Platform } from "ionic-angular";

//***********  ionic-native **************/
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: string = "LoginPage";
  myMenu: Array<any> = [];
  pages: Array<any>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    this.myMenu = [
      { name: "Login", component: "LoginPage" },
      { name: "Image gallery", component: "GalleryPage" },
      { name: "Feed", component: "FeedPage" },
      { name: "Profile", component: "ProfilePage" },
      { name: "Dog Profile", component: "DogProfilePage" },
      { name: "Looking For", component: "LookingForPage" },
      { name: "Create Profile", component: "CreateProfilePage" }
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
      menu.icon = "ios-add-outline";
    } else {
      menu.showDetails = true;
      menu.icon = "ios-remove-outline";
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
