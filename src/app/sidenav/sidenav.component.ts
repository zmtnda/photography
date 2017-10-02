import {Component, ViewChild} from '@angular/core';
import { MdSidenav } from '@angular/material';
import {Router, RouterModule} from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'na-sidenav',
  templateUrl: 'sidenav.component.html',
  styleUrls: ['sidenav.component.css'],
  animations: [
  trigger('collapse', [
    state('open', style({
      opacity: '1',
      display: 'block',
      transform: 'translate3d(0, 0, 0)'
    })),
    state('closed',   style({
      opacity: '0',
      display: 'none',
      transform: 'translate3d(0, -100%, 0)'
    })),
    transition('closed => open', animate('200ms ease-in')),
    transition('open => closed', animate('100ms ease-out'))
  ])
]

})
export class SidenavComponent {
// @ViewChild('sidenav') sidenav: MdSidenav;

  constructor( public router: Router) { }

  show:boolean = false;
  toggleCollapse() {
    this.show = !this.show
  }

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