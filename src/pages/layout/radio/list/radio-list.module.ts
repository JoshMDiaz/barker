import { NgModule } from '@angular/core';
import { RadioListPage } from './radio-list';
import { IonicPageModule } from 'ionic-angular';


@NgModule({
  declarations: [
    RadioListPage,
  ],
  imports: [
    IonicPageModule.forChild(RadioListPage)
  ],
  exports: [
    RadioListPage
  ]
})
export class RadioListPageModule {}
