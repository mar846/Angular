import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { DetailComponent } from './detail/detail.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes:Routes =[
  {path:'',component:GamesComponent},
  {path:'detail/:id',component:DetailComponent},
  {path:'wishlist',component:WishlistComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    DetailComponent,
    WishlistComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
