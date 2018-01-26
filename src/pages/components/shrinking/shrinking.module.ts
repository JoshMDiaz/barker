import { NgModule } from '@angular/core';
import { ShrinkingPage } from './shrinking';
import { IonicPageModule } from 'ionic-angular';
import { ShrinkHeaderModule } from '../../../components/shrink-header/shrink-header.module';
@NgModule({
  declarations: [
    ShrinkingPage,
  ],
  imports: [
    IonicPageModule.forChild(ShrinkingPage),
    ShrinkHeaderModule 
  ],
  exports: [
    ShrinkingPage
  ]
})
export class ShrinkingPageModule {}
