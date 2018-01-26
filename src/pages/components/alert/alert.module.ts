import { NgModule } from '@angular/core';
import { AlertPage } from './alert';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    AlertPage,
  ],
  imports: [
    IonicPageModule.forChild(AlertPage),
  ],
  exports: [
    AlertPage
  ]
})
export class AlertPageModule {}
