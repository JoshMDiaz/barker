import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { BackButtonComponent } from './back-button/back-button';
import { DogCardComponent } from './dog-card/dog-card';
import { PipesModule } from '../pipes/pipes.module';
import { HeaderBarComponent } from './header-bar/header-bar';

@NgModule({
	declarations: [BackButtonComponent,
    DogCardComponent,
    HeaderBarComponent],
	imports: [IonicModule, PipesModule],
	exports: [BackButtonComponent,
    DogCardComponent,
    HeaderBarComponent]
})
export class ComponentsModule {}
