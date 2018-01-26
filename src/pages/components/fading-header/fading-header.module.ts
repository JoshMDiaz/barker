import { NgModule } from '@angular/core';
import { FadingHeaderPage } from './fading-header';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    FadingHeaderPage,
  ],
  imports: [
    IonicPageModule.forChild(FadingHeaderPage),
  ],
  exports: [
    FadingHeaderPage
  ]
})
export class FadingHeaderPageModule {}
