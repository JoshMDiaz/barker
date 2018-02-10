import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SkipModalPage } from './skip-modal';

@NgModule({
  declarations: [
    SkipModalPage,
  ],
  imports: [
    IonicPageModule.forChild(SkipModalPage),
  ],
})
export class SkipModalPageModule {}
