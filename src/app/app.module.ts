import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule} from '@angular/material';;
import { MyMaterialModule} from './mymaterial.module';

import 'hammerjs';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AngularFireModule } from 'angularfire2';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { firebaseConfig } from '../environments/firebase.config';
import { SidenavComponent }   from './sidenav/sidenav.component';
import { SidenavContentComponent } from './sidenavcontent/sidenavcontent.component';
import { SidenavContentImagesComponent }   from './sidenavcontentImages/sidenavcontentImages.component';
import { AppRoutingModule }     from './app-routing.module';
import { AppService } from './app.service';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    SidenavContentComponent,
    SidenavContentImagesComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MyMaterialModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]

})
export class AppModule { }
