import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DogSearchModalPage } from './dog-search-modal';

@NgModule({
  declarations: [
    DogSearchModalPage,
  ],
  imports: [
    IonicPageModule.forChild(DogSearchModalPage),
  ],
})
export class DogSearchModalPageModule {}
