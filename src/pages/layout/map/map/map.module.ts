import { NgModule } from '@angular/core';
import { MapPage } from './map';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    MapPage,
  ],
  imports: [
    IonicPageModule.forChild(MapPage),
  ],
  exports: [
    MapPage
  ]
})
export class MapPageModule {}
