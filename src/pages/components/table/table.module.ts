import { NgModule } from '@angular/core';
import { TablePage } from './table';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    TablePage,
  ],
  imports: [
    IonicPageModule.forChild(TablePage),
  ],
  exports: [
    TablePage
  ]
})
export class TablePageModule {}
