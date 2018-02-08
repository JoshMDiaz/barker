import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateDogsProfilePage } from './create-dogs-profile';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    CreateDogsProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(CreateDogsProfilePage),
    PipesModule
  ],
})
export class CreateDogsProfilePageModule {}
