import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";

// HTTP
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";

//*********** ionic Native **************/
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { Geolocation } from "@ionic-native/geolocation";

import { MyApp } from "./app.component";

//***********  Angularfire2 v5 **************/

import { AngularFireModule } from "angularfire2";
// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from "angularfire2/database-deprecated";
import { AngularFireAuthModule } from "angularfire2/auth";

//***********  Facebook **************/
import { Facebook } from "@ionic-native/facebook";
//***********  Google plus **************/
import { GooglePlus } from "@ionic-native/google-plus";

//*********** Provider **************/
import { AuthData } from "../providers/auth-data";
import { RadioPlayer } from "../providers/radio-service";

//************** import image gallery *********************//

import * as ionicGalleryModal from "ionic-gallery-modal";
import { HAMMER_GESTURE_CONFIG } from "@angular/platform-browser";

// My Custom Components
import { ComponentsModule } from "../components/components.module";
import { PipesModule } from "../pipes/pipes.module";

//********** firebase configuration  ************ */
export const firebaseConfig = {
  apiKey: "AIzaSyAMA0D9NvHCYjB-JMXZWGW0RMQpUgyGERY",
  authDomain: "barker-503ee.firebaseapp.com",
  databaseURL: "https://barker-503ee.firebaseio.com",
  projectId: "barker-503ee",
  storageBucket: "barker-503ee.appspot.com",
  messagingSenderId: "527910470763"
};

@NgModule({
  declarations: [MyApp],
  imports: [
    BrowserModule,
    ionicGalleryModal.GalleryModalModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ComponentsModule,
    PipesModule,
    HttpModule,
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: ionicGalleryModal.GalleryModalHammerConfig
    },
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthData,
    Facebook,
    RadioPlayer,
    Facebook,
    GooglePlus
  ]
})
export class AppModule {}
