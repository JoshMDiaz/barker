import { NgModule } from '@angular/core';
import { FeedPage } from './feed';
import { IonicPageModule } from 'ionic-angular';
import { ShrinkHeaderModule } from '../../../components/shrink-header/shrink-header.module';
@NgModule({
  declarations: [
    FeedPage
  ],
  imports: [
    IonicPageModule.forChild(FeedPage),
    ShrinkHeaderModule 
  ],
  exports: [
    FeedPage
  ]
})
export class FeedPageModule {}
