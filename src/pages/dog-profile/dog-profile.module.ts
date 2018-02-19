import { NgModule } from "@angular/core";
import { DogProfilePage } from "./dog-profile";
import { IonicPageModule } from "ionic-angular";
import { PipesModule } from "../../pipes/pipes.module";
import { ShrinkHeaderModule } from "../../components/shrink-header/shrink-header.module";

@NgModule({
  declarations: [DogProfilePage],
  imports: [
    IonicPageModule.forChild(DogProfilePage),
    PipesModule,
    ShrinkHeaderModule
  ],
  exports: [DogProfilePage]
})
export class DogProfilePageModule {}
