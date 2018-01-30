import { NgModule } from '@angular/core';
import { CountingConverterPipe } from './counting-converter/counting-converter';
import { CommaSpacePipe } from './comma-space/comma-space';

@NgModule({
	declarations: [CountingConverterPipe,
    CommaSpacePipe],
	imports: [],
	exports: [CountingConverterPipe,
    CommaSpacePipe]
})
export class PipesModule {}
