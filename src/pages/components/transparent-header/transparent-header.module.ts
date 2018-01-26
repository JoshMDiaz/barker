import { NgModule } from '@angular/core';
import { TransparentHeaderPage } from './transparent-header';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    TransparentHeaderPage,
  ],
  imports: [
    IonicPageModule.forChild(TransparentHeaderPage),
  ],
  exports: [
    TransparentHeaderPage
  ]
})
export class TransparentHeaderPageModule {}
