import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import{IonicStorageModule}from'@ionic/storage-angular';
import{Drivers}from'@ionic/storage';
import {HttpClientModule,HttpClient} from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,
    IonicStorageModule.forRoot({
    name:'BD',
    driverOrder:[CordovaSQLiteDriver._driver,Drivers.IndexedDB]}),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
