import { NgModule } from '@angular/core';
import { DogProfilePage } from './dog-profile';
import { IonicPageModule } from 'ionic-angular';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    DogProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(DogProfilePage),
    PipesModule
  ],
  exports: [
    DogProfilePage
  ]
})
export class DogProfilePageModule {}
