import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-table',
  templateUrl: 'table.html'
})
export class TablePage {
    products:Array<any> = [];
    constructor(public navCtrl: NavController ) {
   this.products = [
        { 
        name: 'Lady gaga black shirt', 
        price: '$59.00', 
        status: 'In stock' 
        },
       { 
        name: 'Maroon 5 rainbow color t-shirt', 
        price: '$59.00', 
        status: 'In stock' 
        },
       { 
        name: 'Red t-shirt', 
        price: '$19.00', 
        status: 'Out of stock' 
        },
       { 
        name: 'Dark blue t-shirt', 
        price: '$9.00', 
        status: 'Out of stock' 
        },
       { 
        name: 'Dark gray t-shirt', 
        price: '$19.00', 
        status: 'In stock' 
        },
        { 
        name: 'Pinky t-shirt', 
        price: '$19.00', 
        status: 'In stock' 
        },
       { 
        name: 'Yellow t-shirt', 
        price: '$19.00', 
        status: 'Out of stock' 
        },
       { 
        name: 'Ocean blue t-shirt', 
        price: '$29.00', 
        status: 'In stock' 
        },
       { 
        name: 'Rainbow t-shirt', 
        price: '$39.00', 
        status: 'In stock' 
        },
        { 
        name: 'Sunshine t-shirt', 
        price: '$19.00', 
        status: 'In stock' 
        }
      ];      
            
  }



}
