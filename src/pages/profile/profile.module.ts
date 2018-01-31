import { NgModule } from '@angular/core';
import { ProfilePage } from './profile';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    ProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(ProfilePage),
    ComponentsModule,
    PipesModule
  ],
  exports: [
    ProfilePage
  ]
})
export class ProfilePageModule {}
