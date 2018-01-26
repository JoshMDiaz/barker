import { NgModule } from '@angular/core';
import { TabPage } from './tab';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    TabPage,
  ],
  imports: [
    IonicPageModule.forChild(TabPage),
  ],
  exports: [
    TabPage
  ]
})
export class TabPageModule {}
