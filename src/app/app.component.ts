import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import {Router, RouterModule} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @ViewChild('wrapper') 
  // private wrapperElement: ElementRef;
  title = 'app';
  categoryEmitter: string = "";
  show: boolean;
  menuMode: any;


  constructor(public router: Router) {}

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
  
}
