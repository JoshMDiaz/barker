import { NgModule } from '@angular/core';
import { ForgotPage } from './forgot';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    ForgotPage,
  ],
  imports: [
    IonicPageModule.forChild(ForgotPage),
  ],
  exports: [
    ForgotPage
  ]
})
export class ForgotPageModule {}
