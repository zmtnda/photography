import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent }   from './app.component';

import { SidenavComponent }   from './sidenav/sidenav.component';
import { SidenavContentComponent } from './sidenavcontent/sidenavcontent.component';
import { SidenavContentImagesComponent }   from './sidenavcontentImages/sidenavcontentImages.component';

const routes: Routes = [
  
  // { path: 'sidenav',  component: AppComponent },
  //  { path: 'sidenavContent',  component: SidenavContentComponent },
    // { path: 'sidenavcontentImages/:images',  component: SidenavContentImagesComponent ,data: { title: 'Heroes List' }}    
  { path: 'sidenavcontentImages',  component: SidenavContentImagesComponent },    
  { path: '', redirectTo: 'sidenav', pathMatch: 'full'},

  ];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}