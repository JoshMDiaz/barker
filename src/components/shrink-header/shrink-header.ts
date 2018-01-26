
import { Directive,ElementRef,Renderer,Input,ViewChild} from '@angular/core';
import { NavController,ViewController } from 'ionic-angular';

@Directive({
    selector: '[shrink-header]',
    host: {
        '(ionScroll)': 'onContentScroll($event)'
    }
})
export class ShrinkHeader {
    @Input() headerToHide:string;   
  
    header: any;
    headerStart:any;
    contentBox: any;
    headerHeight: any;
    translateAmt: any;
    scrollPosition: number = 0;
    lastScrollTop: number = 0;
    activePage: any;

    constructor(public elementRef: ElementRef, public renderer: Renderer, public navCtrl: NavController) {}
    ngOnInit(){
        this.contentBox =  this.elementRef.nativeElement.getElementsByClassName('scroll-content')[0];
        this.renderer.setElementStyle(this.contentBox, 'margin-top','0px !important');
        this.renderer.setElementStyle(this.contentBox, 'padding-top','100px');
    }

    ngAfterViewInit() {
        console.log(" [headerToHide]="+this.headerToHide);
        this.header = document.getElementsByClassName(this.headerToHide)[0];
        this.renderer.setElementStyle(this.header, 'background-color', '#03a9f4');
        this.renderer.setElementStyle(this.header, 'background-color', '#03a9f4');
        this.headerHeight = this.header.clientHeight;

    }

    onContentScroll(ev) {
        ev.domWrite(() => {
            this.updateHeader(ev);
        });   
    }

    updateHeader(ev) {
        this.scrollPosition = ev.scrollTop;
        if (this.scrollPosition > this.lastScrollTop && this.scrollPosition >= 25) {
            // scrolling down
            this.renderer.setElementStyle(this.header, 'transition', 'all 0.3s linear');
            this.renderer.setElementStyle(this.header, 'transform', 'translateY(-' + this.headerHeight + 'px)');
        } else {
            // scrolling up
            this.renderer.setElementStyle(this.header, 'transform', 'translateY(0px)');
        }
        // reset
        this.lastScrollTop = this.scrollPosition;
    }

}