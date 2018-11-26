import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IndexComponent } from './home/index/index.component';
import { IndexDashboardComponent } from './dashboard/index/index.component';
import { LoginComponent } from './dashboard/login/login.component';

const routes: Routes = [
    {
        path: '', component: HomeComponent, children: [
            { path: '', component: IndexComponent }
        ]
    },
    {
        path: 'dashboard', component: DashboardComponent, children: [
            { path: '', component: IndexDashboardComponent },
        ]
    },
    { path: 'login', component: LoginComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
