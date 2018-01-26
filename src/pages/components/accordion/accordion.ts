import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-accordion',
  templateUrl: 'accordion.html'
})
export class AccordionPage {
 lists:Array<any> = [];
    shownDetail = null;
    constructor(public navCtrl: NavController ) {
     
      this.lists = [
        { 
        name: 'Finn', 
        img: 'http://ionicframework.com/dist/preview-app/www/assets/img/avatar-finn.png', 
        detail: 'Finn, designation number FN-2187, is a fictional character in the Star Wars franchise. He first appeared in the 2015 film Star Wars: The Force Awakens in which he is a stormtrooper for the First Order who flees and turns against it after being shocked by their cruelty in his first combat mission. He is played by British actor John Boyega, who will reprise the role in Star Wars: The Last Jedi.' 
        },
        { name: 'Han', 
        img: 'http://ionicframework.com/dist/preview-app/www/assets/img/avatar-han.png',
        detail: 'Han Solo is a character in the Star Wars franchise. In the original film trilogy, Han and his co-pilot, Chewbacca, become involved in the Rebel Alliances struggle against the Galactic Empire. During the course of the Star Wars story, he becomes a chief figure in the Alliance and succeeding galactic governments. Star Wars creator George Lucas described the character as "a loner who realizes the importance of being part of a group and helping for the common good".[1] Harrison Ford portrayed the character in the original Star Wars trilogy as well as Star Wars: The Force Awakens. Alden Ehrenreich will portray a young Han Solo in an upcoming, as yet untitled spinoff film.' 
        },
        { 
            name: 'Rey', 
        img: 'http://ionicframework.com/dist/preview-app/www/assets/img/avatar-rey.png', 
        detail: 'Rey is a fictional character in the Star Wars franchise, portrayed by English actress Daisy Ridley. First appearing as the central character in Star Wars: The Force Awakens, Rey is a scavenger who was left behind on the planet Jakku when she was a child, and later becomes involved with the Resistances conflict with the First Order when her solitary life is interrupted by BB-8, the droid of ace Resistance pilot Poe Dameron, and a runaway Stormtrooper named Finn.' 
        },
        { 
            name: 'Luke', 
            img: 'http://ionicframework.com/dist/preview-app/www/assets/img/avatar-luke.png', 
            detail: 'Luke Skywalker is a fictional character and the main protagonist of the original film trilogy of the Star Wars franchise created by George Lucas. The character, portrayed by Mark Hamill, is an important figure in the Rebel Alliance s struggle against the Galactic Empire. He is the twin brother of Rebellion leader Princess Leia Organa of Alderaan, a friend and brother-in-law of smuggler Han Solo, an apprentice to Jedi Masters Obi-Wan "Ben" Kenobi and Yoda, the son of fallen Jedi Anakin Skywalker (Darth Vader) and Queen of Naboo/Republic Senator Padmé Amidala and maternal uncle of Kylo Ren / Ben Solo. The now non-canon Star Wars expanded universe depicts him as a powerful Jedi Master, husband of Mara Jade, the father of Ben Skywalker and maternal uncle of Jaina, Jacen and Anakin Solo.'
         },
        { 
            name: 'Yoda', 
            img: 'http://ionicframework.com/dist/preview-app/www/assets/img/avatar-yoda.png', 
            detail: 'Yoda, a male member of a mysterious species, was a revered Jedi Master who served as the Grand Master of the Jedi Order in the waning days of the Galactic Republic. He was renowned within the Order for his wisdom, powers of the Force, and lightsaber combat, and he lived for nearly 900 years. His time during the last days of the Jedi Order and beyond made him a consequential figure in galactic history.' 
        },
        { 
            name: 'Leia', 
            img: 'http://ionicframework.com/dist/preview-app/www/assets/img/avatar-leia.png', 
            detail: 'Princess Leia Organa of Alderaan, later known as General Leia Organa, is a fictional character in the Star Wars franchise, portrayed in films by Carrie Fisher. Introduced in the original Star Wars film in 1977, Leia is princess of the planet Alderaan, a member of the Imperial Senate and an agent of the Rebel Alliance.' 
        }
      ];       
    }
toggleDetail(group) {
    if (this.isDetailShown(group)) {
        this.shownDetail = null;
    } else {
        this.shownDetail = group;
    }
};
isDetailShown(group) {
    return this.shownDetail === group;
};



}
