import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavouriteComponent } from './component/favourite/favourite.component';
import { LandingviewComponent } from './component/landingview/landingview.component';

const routes: Routes = [
  {path:'',component:LandingviewComponent},
  {path:'Favourites',component:FavouriteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
