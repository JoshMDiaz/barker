import { NgModule } from '@angular/core';
import { SearchPage } from './search';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    SearchPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchPage),
  ],
  exports: [
    SearchPage
  ]
})
export class SearchPageModule {}
