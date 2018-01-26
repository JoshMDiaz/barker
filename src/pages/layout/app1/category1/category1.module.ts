import { NgModule } from '@angular/core';
import { Category1Page } from './category1';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    Category1Page,
  ],
  imports: [
    IonicPageModule.forChild(Category1Page),
  ],
  exports: [
    Category1Page
  ]
})
export class Category1PageModule {}
