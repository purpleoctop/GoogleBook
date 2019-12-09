import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BooksComponent } from './books/books.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
 { path: '', component: HeaderComponent,
 children:[
  {path:'home', data: { header: 'books' }, component: BooksComponent},
  {path:'favorites', data: { header: 'favorites' }, component: FavoritesComponent},
  {path: 'details', data: { header: 'details'}, component: DetailsComponent },
  {path: '', redirectTo: 'home', pathMatch: 'full'}
  ]
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
