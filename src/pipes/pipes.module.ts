import { NgModule } from '@angular/core';
import { CountingConverterPipe } from './counting-converter/counting-converter';
import { CommaSpacePipe } from './comma-space/comma-space';
import { CapitalizePipe } from './capitalize/capitalize';
import { AgePipe } from './age/age';

@NgModule({
	declarations: [CountingConverterPipe,
    CommaSpacePipe,
    CapitalizePipe,
    AgePipe],
	imports: [],
	exports: [CountingConverterPipe,
    CommaSpacePipe,
    CapitalizePipe,
    AgePipe]
})
export class PipesModule {}
