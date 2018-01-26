import { NgModule } from '@angular/core';
import { ThemePage } from './theme';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    ThemePage,
  ],
  imports: [
    IonicPageModule.forChild(ThemePage),
  ],
  exports: [
    ThemePage
  ]
})
export class ThemePageModule {}
