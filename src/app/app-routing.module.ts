import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { ViewDetailsComponent } from './view-details/view-details.component';

const routes: Routes = [
  {
path:'',component: HomeComponent
  },
  {
    path:'details/:id',component:ViewDetailsComponent
  },
  {
    path:'searchpage',component:SearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
