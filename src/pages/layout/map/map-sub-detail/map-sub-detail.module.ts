import { NgModule } from '@angular/core';
import { MapSubDetailPage } from './map-sub-detail';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    MapSubDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(MapSubDetailPage),
  ],
  exports: [
    MapSubDetailPage
  ]
})
export class MapSubDetailPageModule {}
