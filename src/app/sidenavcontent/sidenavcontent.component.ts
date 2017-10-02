import {Component, ViewChild, Inject, Output, EventEmitter} from '@angular/core';
import { Category} from '../category';
import { CATEGORIES} from '../mock-categories';
// import { FirebaseApp } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth'
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
// import {ActivatedRoute} from "@angular/router";

import * as firebase from 'firebase/app'
import 'firebase/storage'

import {Router, RouterModule} from '@angular/router';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import { NavigationExtras } from '@angular/router';
import { AppService } from '../app.service'


interface Thing{
    name:string;
    route:string;
}


@Component({
  selector: 'na-sidenav-content',
  templateUrl: 'sidenavcontent.component.html',
  styleUrls: ['sidenavcontent.component.css'],
  
})
export class SidenavContentComponent implements NavigationExtras {
  @Output() categoryEmitter = new EventEmitter();
    categories = CATEGORIES;
    storageRef: any;
    database: any;
    items: any[];
    changeRoute: boolean;
    
    constructor(public afAuth: AngularFireAuth,
    public afDb: AngularFireDatabase, public appService: AppService) {
       this.storageRef = firebase.storage().ref();
       this.database = afDb;
     }
    ngOnInit() {
      this.changeRoute = true;
      var category = { url: "assets/wedding.jpg", caption: 'PORTRAIT' };
      this.extractFirebaseImg(category);
    }
    extractFirebaseImg(category){
      // this.firebaseApp
      var imagesURL = [];
       this.changeRoute = false;
      console.log("category",category);
      if (category.caption == 'PORTRAIT'){
        // this.items = this.database.list('/potrait');
        // console.log(this.items);
        this.items = this.database.list('/potrait', { preserveSnapshot: true})
        .subscribe(snapshots=>{
            snapshots.forEach(snapshot => {
              console.log(snapshot.key, snapshot.val());
              imagesURL.push(snapshot.val());
              console.log(imagesURL);
            });
            console.log("hidone");
            this.appService.setImagesUrl(imagesURL);
            this.categoryEmitter.emit('potrait');
        })  
      }
      else if (category.caption == 'MATERNITY'){
        this.items = this.database.list('/maternity', { preserveSnapshot: true})
        .subscribe(snapshots=>{
            snapshots.forEach(snapshot => {
              console.log(snapshot.key, snapshot.val());
              imagesURL.push(snapshot.val());
              console.log(imagesURL);
            });
            this.appService.setImagesUrl(imagesURL);
            this.categoryEmitter.emit('maternity');
        })  
      }
      else if (category.caption == 'LANDSCAPE'){
        this.items = this.database.list('/nature', { preserveSnapshot: true})
        .subscribe(snapshots=>{
            snapshots.forEach(snapshot => {
              console.log(snapshot.key, snapshot.val());
              imagesURL.push(snapshot.val());
              console.log(imagesURL);
            });
            this.appService.setImagesUrl(imagesURL);
            this.categoryEmitter.emit('landscape');
        })  
      }
    }
}
   
