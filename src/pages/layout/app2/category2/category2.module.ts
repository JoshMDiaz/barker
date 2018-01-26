import { NgModule } from '@angular/core';
import { Category2Page } from './category2';
import { IonicPageModule } from 'ionic-angular';
//import { ShrinkHeaderModule } from '../../../../components/shrink-header/shrink-header.module';
@NgModule({
  declarations: [
    Category2Page,
  ],
  imports: [
    IonicPageModule.forChild(Category2Page)
    //ShrinkHeaderModule 
  ],
  exports: [
    Category2Page
  ]
})
export class Category2PageModule {}
