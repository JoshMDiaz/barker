import { NgModule } from '@angular/core';
import { ChartPage } from './chart';
import { IonicPageModule } from 'ionic-angular';

// Import Chart 
import {ChartsModule} from 'ng2-charts/charts/charts';
import '../../../../node_modules/chart.js/dist/Chart.bundle.min.js'; 


@NgModule({
  declarations: [
    ChartPage,
  ],
  imports: [
    IonicPageModule.forChild(ChartPage),
    // Importing ChartsModule
    ChartsModule
  ],
  exports: [
    ChartPage
  ]
})
export class ChartPageModule {}
