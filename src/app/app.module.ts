import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { HomeModule } from './home/home.module';
import * as $ from 'jquery';
import { DashboardModule } from './dashboard/dashboard.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { UserLoginService } from './core/service/user-login.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    AppRoutingModule,
    DashboardModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCFNa4FKdG5N4OHCVNQ3OB83iTAIkN2b1Y",
      authDomain: "datmon-16796.firebaseapp.com",
      databaseURL: "https://datmon-16796.firebaseio.com",
      projectId: "datmon-16796",
      storageBucket: "datmon-16796.appspot.com",
      messagingSenderId: "863889189738"
    })
  ],
  exports:[
  ],
  providers: [
    UserLoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){

  }
}
