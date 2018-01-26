import { NgModule } from '@angular/core';
import { GridPage } from './grid';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    GridPage,
  ],
  imports: [
    IonicPageModule.forChild(GridPage),
  ],
  exports: [
    GridPage
  ]
})
export class GridPageModule {}
