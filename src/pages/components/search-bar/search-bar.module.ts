import { NgModule } from '@angular/core';
import { SearchBarPage } from './search-bar';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    SearchBarPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchBarPage),
  ],
  exports: [
    SearchBarPage
  ]
})
export class SearchBarPageModule {}
