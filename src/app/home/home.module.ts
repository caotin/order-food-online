import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { HomeRoutingModule } from './home-routing.module';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    HeaderComponent, 
    FooterComponent,
    HomeComponent,
    IndexComponent, 
    SearchComponent, RestaurantComponent, PaymentComponent],
  exports:[
    HeaderComponent, 
    FooterComponent,
    HomeComponent,
    IndexComponent
  ]
})
export class HomeModule { }
