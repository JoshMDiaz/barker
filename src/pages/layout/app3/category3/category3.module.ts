import { NgModule } from '@angular/core';
import { Category3Page } from './category3';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    Category3Page,
  ],
  imports: [
    IonicPageModule.forChild(Category3Page),
  ],
  exports: [
    Category3Page
  ]
})
export class Category3PageModule {}
