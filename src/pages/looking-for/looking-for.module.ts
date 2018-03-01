import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LookingForPage } from './looking-for';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    LookingForPage,
  ],
  imports: [
    IonicPageModule.forChild(LookingForPage),
    PipesModule,
    ComponentsModule
  ],
})
export class LookingForPageModule {}
