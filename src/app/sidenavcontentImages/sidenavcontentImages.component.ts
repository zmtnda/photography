import {Component, ViewChild, OnInit} from '@angular/core';
import { MdSidenav } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service'

@Component({
  selector: 'na-sidenav-content-images',
  templateUrl: 'sidenavcontentImages.component.html',
  styleUrls: ['sidenavcontentImages.component.css'],
})
export class SidenavContentImagesComponent implements OnInit{
// @ViewChild('sidenav') sidenav: MdSidenav;
  imagesUrl : any[];
    constructor( public appService: AppService) { }

    ngOnInit() {
      console.log("images should be shown");
      this.imagesUrl = this.appService.getImagesUrl();
      console.log(this.imagesUrl);
      // let images = this.route.snapshot.paramMap.get('images');
      // this.contactsService.getContact(id)
      //     .subscribe(contact => this.contact = contact);
    }

    
}