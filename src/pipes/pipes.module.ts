import { NgModule } from '@angular/core';
import { CountingConverterPipe } from './counting-converter/counting-converter';
@NgModule({
	declarations: [CountingConverterPipe],
	imports: [],
	exports: [CountingConverterPipe]
})
export class PipesModule {}
