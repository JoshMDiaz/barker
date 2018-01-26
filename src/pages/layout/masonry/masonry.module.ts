import { NgModule } from '@angular/core';
import { MasonryPage } from './masonry';
import { IonicPageModule } from 'ionic-angular';
import { ShrinkHeaderModule } from '../../../components/shrink-header/shrink-header.module';
@NgModule({
  declarations: [
    MasonryPage,
  ],
  imports: [
    IonicPageModule.forChild(MasonryPage),
    ShrinkHeaderModule 
  ],
  exports: [
    MasonryPage
  ]
})
export class MasonryPageModule {}
