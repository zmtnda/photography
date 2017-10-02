import { Component, OnInit, ViewChild, ElementRef,ViewEncapsulation } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import {Router, RouterModule} from '@angular/router';
import {trigger, state, style, transition, animate, } from '@angular/animations';
import {MaterialModule} from '@angular/material'
import { MdMenuTrigger } from '@angular/material'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild(MdMenuTrigger) trigger: MdMenuTrigger;
  // @ViewChild('wrapper') 
  // private wrapperElement: ElementRef;
  title = 'app';
  categoryEmitter: string = "";
  show: boolean;
  menuMode: any;


  constructor(public router: Router) {}

isIn = false;   // store state
    toggleState() { // click handler
        let bool = this.isIn;
        this.isIn = bool === false ? true : false; 
    }
  ngOnInit() {
      this.show = true;
    //   if (this.wrapperElement.nativeElement.offsetWidth <= 720) {
    //     console.log("<720")
    //     this.menuMode = "over";
    // } else {
    //   console.log(">720")
    //     this.menuMode = "side";
    // }
    }
isLargeScreen() {
  const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  if (width > 720) {
    console.log("<720")
      return true;
  } else {
      return false;
  }
}

  showImages(category: string) {
    this.show = false;
    this.router.navigateByUrl('/sidenavcontentImages');
  }
  
  goInstagram() {
                // this.router.navigate(['/sidenavcontentImages']);
    window.location.href='https://www.instagram.com/nanda_aung14/';
  }
  onResize($event){
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width< 960){
      //  console.log("<960", width, $event);
      this.trigger.closeMenu();
    }else{
      // console.log(">960", width, $event);
    }
    
  }
}
