import { NgModule } from '@angular/core';
import { TagPage } from './tag';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    TagPage,
  ],
  imports: [
    IonicPageModule.forChild(TagPage),
  ],
  exports: [
    TagPage
  ]
})
export class TagPageModule {}
