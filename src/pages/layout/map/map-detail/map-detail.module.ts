import { NgModule } from '@angular/core';
import { MapDetailPage } from './map-detail';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    MapDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(MapDetailPage),
  ],
  exports: [
    MapDetailPage
  ]
})
export class MapDetailPageModule {}
