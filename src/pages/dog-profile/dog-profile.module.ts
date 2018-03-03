import { NgModule } from "@angular/core";
import { DogProfilePage } from "./dog-profile";
import { IonicPageModule } from "ionic-angular";
import { PipesModule } from "../../pipes/pipes.module";
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  declarations: [DogProfilePage],
  imports: [
    IonicPageModule.forChild(DogProfilePage),
    PipesModule,
    ComponentsModule
  ],
  exports: [DogProfilePage]
})
export class DogProfilePageModule {}
