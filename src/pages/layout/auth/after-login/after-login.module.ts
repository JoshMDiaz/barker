import { NgModule } from '@angular/core';
import { AfterLoginPage } from './after-login';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    AfterLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(AfterLoginPage),
  ],
  exports: [
    AfterLoginPage
  ]
})
export class AfterLoginPageModule {}
