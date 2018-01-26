import { Component, ChangeDetectorRef } from '@angular/core';
import { IonicPage } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-fading-header',
  templateUrl: 'fading-header.html'
})
export class FadingHeaderPage {

    showToolbar:boolean = false;
    transition:boolean = false;
        
    // headerImgSize:string = '100%';
    // headerImgUrl:string = '';

    items = [
        'Pokémon Yellow',
        'Super Metroid',
        'Mega Man X',
        'The Legend of Zelda',
        'Pac-Man',
        'Super Mario World',
        'Street Fighter II',
        'Half Life',
        'Final Fantasy VII',
        'Star Fox',
        'Tetris',
        'Donkey Kong III',
        'GoldenEye 007',
        'Doom',
        'Fallout',
        'GTA',
        'Halo',
        'Pokémon Yellow',
        'Super Metroid',
        'Mega Man X',
        'The Legend of Zelda',
        'Pac-Man',
        'Super Mario World',
        'Street Fighter II',
        'Half Life',
        'Final Fantasy VII',
        'Star Fox',  'Pokémon Yellow',
        'Super Metroid',
        'Mega Man X',
        'The Legend of Zelda',
        'Pac-Man',
        'Super Mario World',
        'Street Fighter II',
        'Half Life',
        'Final Fantasy VII',
        'Star Fox',
        'Tetris',
        'Donkey Kong III',
        'GoldenEye 007',
        'Doom',
        'Fallout',
        'GTA',
        'Halo',
        'Pokémon Yellow',
        'Super Metroid',
        'Mega Man X',
        'The Legend of Zelda',
        'Pac-Man',
        'Super Mario World',
        'Street Fighter II',
        'Half Life',
        'Final Fantasy VII',
        'Star Fox'
    ];
    constructor(public ref: ChangeDetectorRef) {  
    }

    onScroll($event: any){
        let scrollTop = $event.scrollTop;
        this.showToolbar = scrollTop >= 100;
        if(scrollTop < 0){
            this.transition = false;
            //this.headerImgSize = `${ Math.abs(scrollTop)/2 + 100}%`;
        }else{
            this.transition = true;
            //this.headerImgSize = '100%'
        }
        this.ref.detectChanges();
    }


}


