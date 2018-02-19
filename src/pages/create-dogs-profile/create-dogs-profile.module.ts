import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateDogsProfilePage } from './create-dogs-profile';
import { PipesModule } from '../../pipes/pipes.module';
import { ShrinkHeaderModule } from '../../components/shrink-header/shrink-header.module';

@NgModule({
  declarations: [
    CreateDogsProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(CreateDogsProfilePage),
    PipesModule,
    ShrinkHeaderModule
  ],
})
export class CreateDogsProfilePageModule {}
