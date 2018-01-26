import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class RadioPlayer  {
  stream:any;
  promise:any;
  constructor() {
  };

  play(url) {
    this.stream = new Audio(url);
    this.stream.play();
    this.stream.volume = 0.5;
    console.log("SHOW VOL = "+this.stream.volume);
    this.promise = new Promise((resolve,reject) => {
        this.stream.addEventListener('playing', () => {
          console.log("Radio service is play");
          resolve(true);
        });

        this.stream.addEventListener('error', () => {
          reject(false);
        });
      });
    return this.promise;
  };
  pause() {
    console.log("Radio service is pause");
    this.stream.pause(); 
  };
  stop() {
    console.log("Radio service is STOP");
    this.stream.pause(); 
    // This stops the stream from downloading
    var temp = this; setTimeout(function () { 
      console.log("Stop download");
      temp.stream.src = "about:blank"; 
      temp.stream.load(); 
    })

  };
 
}