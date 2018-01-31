import { NgModule } from '@angular/core';
import { CountingConverterPipe } from './counting-converter/counting-converter';
import { CommaSpacePipe } from './comma-space/comma-space';
import { CapitalizePipe } from './capitalize/capitalize';

@NgModule({
	declarations: [CountingConverterPipe,
    CommaSpacePipe,
    CapitalizePipe],
	imports: [],
	exports: [CountingConverterPipe,
    CommaSpacePipe,
    CapitalizePipe]
})
export class PipesModule {}
