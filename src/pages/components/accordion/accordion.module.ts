import { NgModule } from '@angular/core';
import { AccordionPage } from './accordion';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    AccordionPage,
  ],
  imports: [
    IonicPageModule.forChild(AccordionPage),
  ],
  exports: [
    AccordionPage
  ]
})
export class AccordionPageModule {}
