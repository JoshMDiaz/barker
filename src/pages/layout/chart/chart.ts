

import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, LoadingController } from 'ionic-angular';
import { Chart } from 'chart.js';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';

import 'rxjs/add/operator/map'; // you might need to import this, or not depends on your setup

@IonicPage()
@Component({
  selector: 'page-chart',
  templateUrl: 'chart.html'
})
export class ChartPage {
    
    chartData: number[] =  [];

    chartLabels: string[] = [];
    chartLegend:boolean = false;

    //*********** chart color theme   **************//
    chartColor1: any[] = [{backgroundColor:['#d53e4f','#f46d43','#fdae61','#e6f598','#abdda4','#66c2a5','#3288bd','#5e4fa2']}]; 
    
    chartColor2: any[] = [{backgroundColor:['rgba(127,0,0, 0.2)','rgba(215,48,39,0.2)','rgba(244,109,67,0.2)','rgba(253,174,97,0.2)','rgba(254,224,139,0.2)','rgba(255,255,191,0.2)','rgba(217,239,139,0.2)','rgba(166,217,106,0.2)','rgba(102,189,99,0.2)','rgba(26,152,80,0.2)','rgba(0,104,55,0.2)']}]; 
    
    chartColor3: any[] =  [{backgroundColor:['rgba(127,0,0, 0.8)','rgba(179,0,0, 0.7)','rgba(215,48,31, 0.4)','rgba(239,101,72, 0.4)','rgba(252,141,89, 0.4)','rgba(253,187,132, 0.4)']}]; 
    
    chartColor4: any[] = [{backgroundColor:['#fff7f3','#fde0dd','#fcc5c0','#fa9fb5','#f768a1','#dd3497','#ae017e','#7a0177','#49006a','#01665e','#003c30']}];
    
    chartColor5: any[] =  [{ backgroundColor:['#8c510a','#bf812d','#dfc27d','#f6e8c3','#c7eae5','#80cdc1','#35978f','#01665e','#003c30']}]; 
    
    chartColorForLine: any[] = [{ backgroundColor:'rgba(127,0,0, 0.8)'  }];  
    //**********************************************//

    lineChartOptions: any = {
        responsive: true,
        maintainAspectRatio: false,
        scaleShowVerticalLines: false,
        legend: {position: 'bottom'}
    };
    halfDonutOptions: any = {
            responsive: true,
            maintainAspectRatio: false,
            rotation: 1 * Math.PI,
            circumference: 1 * Math.PI
    };
    baseOptions: any = {
        responsive: true,
        maintainAspectRatio: false,

    };

    chartView: string = "Bar";
    isDataAvailable: boolean = false;  
    chartList: FirebaseListObservable<any[]>;

   
    constructor(public navCtrl: NavController, public afDB: AngularFireDatabase,public loadingCtrl: LoadingController ) {
    let loadingPopup = this.loadingCtrl.create({
        spinner: 'crescent',
        content: ''
    });
    loadingPopup.present();      
        this.chartList = afDB.list('/chart', { preserveSnapshot: true });;
        this.chartList
        .subscribe(snapshots => {
            snapshots.forEach(snapshot => {
                this.chartLabels.push(snapshot.val().country);
                console.log("this.chartLabels.push= "+snapshot.val().country);
                this.chartData.push(parseInt(snapshot.val().view));
                console.log("this.chartData.push= "+parseInt(snapshot.val().view));
            });
                console.log("==================this.chartLabels = "+this.chartLabels);
                console.log("==================this.pieChartLabels = "+this.chartData);
                this.isDataAvailable = true;
                loadingPopup.dismiss()
        })
    } 
}

