import {Component, ViewChild} from '@angular/core';
import { MdSidenav } from '@angular/material';
import {Router, RouterModule} from '@angular/router';


@Component({
  selector: 'na-sidenav',
  templateUrl: 'sidenav.component.html',
  styleUrls: ['sidenav.component.css'],
})
export class SidenavComponent {
// @ViewChild('sidenav') sidenav: MdSidenav;
  constructor( public router: Router) { }

  ngOnInit() {
  }

  // toggle() {
  //   console.log("before toggle ");
  //   this.sidenav.toggle();
  //         console.log("after toggle ");

  // }
  goInstagram() {
                // this.router.navigate(['/sidenavcontentImages']);
    window.location.href='https://www.instagram.com/nanda_aung14/';
  }
}