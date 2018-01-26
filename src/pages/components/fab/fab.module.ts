import { NgModule } from '@angular/core';
import { FabPage } from './fab';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    FabPage,
  ],
  imports: [
    IonicPageModule.forChild(FabPage),
  ],
  exports: [
    FabPage
  ]
})
export class FabPageModule {}
