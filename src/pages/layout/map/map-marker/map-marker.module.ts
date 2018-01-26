import { NgModule } from '@angular/core';
import { MapMarkerPage } from './map-marker';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    MapMarkerPage,
  ],
  imports: [
    IonicPageModule.forChild(MapMarkerPage),
  ],
  exports: [
    MapMarkerPage
  ]
})
export class MapMarkerPageModule {}
