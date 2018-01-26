import { NgModule } from '@angular/core';
import { ToastPage } from './toast';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    ToastPage,
  ],
  imports: [
    IonicPageModule.forChild(ToastPage),
  ],
  exports: [
    ToastPage
  ]
})
export class ToastPageModule {}
