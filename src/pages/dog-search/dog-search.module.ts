import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DogSearchPage } from './dog-search';
import { ShrinkHeaderModule } from '../../components/shrink-header/shrink-header.module';
import { PipesModule } from '../../pipes/pipes.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    DogSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(DogSearchPage),
    ShrinkHeaderModule,
    PipesModule,
    ComponentsModule
  ],
})
export class DogSearchPageModule {}
