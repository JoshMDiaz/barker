import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LookingForPage } from './looking-for';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    LookingForPage,
  ],
  imports: [
    IonicPageModule.forChild(LookingForPage),
    ComponentsModule
  ],
})
export class LookingForPageModule {}
