import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LookingForBreedingPage } from './looking-for-breeding';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    LookingForBreedingPage,
  ],
  imports: [
    IonicPageModule.forChild(LookingForBreedingPage),
    PipesModule
  ],
})
export class LookingForBreedingPageModule {}
