import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { HomeModule } from './home/home.module';
import * as $ from 'jquery';
import { DashboardModule } from './dashboard/dashboard.module';
import { UserLoginService } from './core/service/user-login.service';
import { SharedComponent } from './core/shared/shared.component';
import { CityService } from './core/service/city.service';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { NothingComponent } from './nothing/nothing.component';
import { PageErrorComponent } from './page-error/page-error.component';

@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    NothingComponent,
    PageErrorComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    FormsModule,
    DashboardModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  exports:[
  ],
  providers: [
    UserLoginService,
    CityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){

  }
}
