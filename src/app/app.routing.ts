import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IndexComponent } from './home/index/index.component';
import { IndexDashboardComponent } from './dashboard/index/index.component';
import { LoginComponent } from './dashboard/login/login.component';
import { SearchComponent } from './home/search/search.component';
import { RestaurantComponent } from './home/restaurant/restaurant.component';
import { NothingComponent } from './nothing/nothing.component';
import { ManagerComponent } from './dashboard/manager/manager.component';
import { UsersComponent } from './dashboard/users/users.component';
import { FoodComponent } from './dashboard/food/food.component';
import { PageErrorComponent } from './page-error/page-error.component';
import { PaymentComponent } from './home/payment/payment.component';

const routes: Routes = [
    {
        path: 'dashboard', component: DashboardComponent, children: [
            { path: '', component: IndexDashboardComponent },
            { path: 'order', component: ManagerComponent },
            { path: 'setting', component: UsersComponent },
            { path: 'food', component: FoodComponent }
        ]
    },
    {
        path: '', component: HomeComponent, children: [
            { path: '', component: IndexComponent },
            { path: 'search/:city/:township', component: SearchComponent },
            { path: 'search/:city/:township/:id', component: RestaurantComponent },
            { path: 'payment', component: PaymentComponent },
        ]
    },

    {
        path: '', component: NothingComponent, children: [
            { path: 'login', component: LoginComponent }
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
