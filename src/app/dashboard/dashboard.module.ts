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

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [DashboardComponent,IndexDashboardComponent, LoginComponent, RestaurantComponent, FoodComponent, UsersComponent, ManagerComponent],
  exports: [DashboardComponent,IndexDashboardComponent]
})
export class DashboardModule { }
