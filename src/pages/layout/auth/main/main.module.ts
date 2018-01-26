import { NgModule } from '@angular/core';
import { MainPage } from './main';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    MainPage,
  ],
  imports: [
    IonicPageModule.forChild(MainPage),
  ],
  exports: [
    MainPage
  ]
})
export class MainPageModule {}
