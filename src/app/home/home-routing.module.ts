import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: '', component: IndexComponent },
      { path: ':city/:township', component: SearchComponent },
      // { path: '', component: IndexComponent },
      // { path: '', component: IndexComponent },

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
