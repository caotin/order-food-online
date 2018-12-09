import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexDashboardComponent } from './index/index.component';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { FoodComponent } from './food/food.component';
import { UsersComponent } from './users/users.component';
import { ManagerComponent } from './manager/manager.component';
import { ProfileComponent } from './profile/profile.component';
import { DheaderComponent } from './dheader/dheader.component';
import { DfooterComponent } from './dfooter/dfooter.component';
import { DsidebarComponent } from './dsidebar/dsidebar.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [DashboardComponent,IndexDashboardComponent, LoginComponent, RestaurantComponent, FoodComponent, UsersComponent, ManagerComponent, ProfileComponent, DheaderComponent, DfooterComponent, DsidebarComponent],
  exports: [DashboardComponent,IndexDashboardComponent, LoginComponent, RestaurantComponent, FoodComponent, UsersComponent, ManagerComponent, ProfileComponent, DheaderComponent, DfooterComponent, DsidebarComponent]
})
export class DashboardModule { }
