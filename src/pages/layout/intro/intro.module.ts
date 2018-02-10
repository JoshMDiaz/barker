import { NgModule } from '@angular/core';
import { IntroPage } from './intro';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    IntroPage,
  ],
  imports: [
    IonicPageModule.forChild(IntroPage),
    ComponentsModule
  ],
  exports: [
    IntroPage
  ]
})
export class IntroPageModule {}
