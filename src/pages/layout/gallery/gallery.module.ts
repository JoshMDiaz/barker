import { NgModule } from '@angular/core';
import { GalleryPage } from './gallery';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    GalleryPage,
  ],
  imports: [
    IonicPageModule.forChild(GalleryPage),
  ],
  exports: [
    GalleryPage
  ]
})
export class GalleryPageModule {}
