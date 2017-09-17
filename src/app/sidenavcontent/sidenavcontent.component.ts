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
    }
    extractFirebaseImg(category){
      // this.firebaseApp
      var imagesURL = [];
       this.changeRoute = false;
      console.log("category",category);
      if (category.caption == 'POTRAIT'){
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
            // setTimeout(() => {
             
            //   console.log("settimeout")
            // this.router.navigate([  '/sidenavcontentImages']);
            //         }, 1000);
            // this.router.navigateByUrl('/sidenavcontentImages');
        })
        // Promise.all(imagesURL).then(values => {
          
        //   console.log("values",values);
        // });
        // this.items.forEach(element => {
        //     // imagesURL.push(element.$value);
        //     console.log(element,  element[0].$value, element[0]);
        //   });
        // var p3 = new Promise ((resolve, reject) => {
        //   this.items.forEach(element => {
        //     imagesURL.push(element.$value);
        //   });
        // });
        // Promise.all(imagesURL).then(values => {
        //   console.log(imagesURL, values);
        // });
        //  var fn = function getValue(v){ // sample async action
        //    console.log("v", v);
        //     return new Promise((resolve, reject) => {
        //       resolve(imagesURL.push(v.$value))
        //     });
        // };
        // let actions = this.items.map(fn);
        // Promise.all(actions).then(values => {
          
        //   console.log("values",values);
        // });
        // var fn = function getValue(v){ // sample async action
        //     return new Promise(resolve => setTimeout(() => resolve(imagesURL.push(v.$value)), 100));
        // };
        // let actions = this.items.map(fn);
        // var results = Promise.all(actions);
        // results.then(data => // or just .then(console.log)
        //     console.log(data, imagesURL) // [2, 4, 6, 8, 10]
        // );

      //  console.log ('actions',actions, imagesURL);

        // Promise.all([
        //   this.items.forEach(element => {
        //   console.log(element);
        // })
        // ]).then(value => 
        //   console.log("after all")
        //   // this.router.navigate(['/sidenavcontentImages'], { queryParams: { category: this.items} })
        
        // );
       
        // var whatever2 = new Promise((resolve, reject) =>{
          
        //   resolve(this.items.map(element => {
        //     imagesURL.push(element.$value)
        //     console.log(element);
        //   }));
        // });
        // whatever2.then(v => console.log("Task Complete!", v));
      
      
      
        
  //       var imagesRef = this.storageRef.child('potrait');
  //       var fileName = '_MG_2376.jpg';
  //       var spaceRef = imagesRef.child(fileName);
  //       var path = spaceRef.fullPath;
  //       console.log("path",path);
  //       spaceRef.getDownloadURL().then(function(url) {
  //         console.log(url);
  // // Insert url into an <img> tag to "download"
  //       }).catch(function(error) {

  //           // A full list of error codes is available at
  //           // https://firebase.google.com/docs/storage/web/handle-errors
  //           switch (error.code) {
  //             case 'storage/object_not_found':
  //               // File doesn't exist
  //               break;

  //             case 'storage/unauthorized':
  //               // User doesn't have permission to access the object
  //               break;

  //             case 'storage/canceled':
  //               // User canceled the upload
  //               break;


  //             case 'storage/unknown':
  //               // Unknown error occurred, inspect the server response
  //               break;
  //           }
  //         });
      }
    }
}
   
