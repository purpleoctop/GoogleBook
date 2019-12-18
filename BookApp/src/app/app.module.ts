import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BooksComponent } from './books/books.component';
import { HttpClientModule } from '@angular/common/http';
import { FavoritesComponent } from './favorites/favorites.component';
import { DetailsComponent } from './details/details.component';
import { LoadingComponent } from './loading/loading.component';
import { RatingComponent } from './rating/rating.component';
import { StoreModule } from '@ngrx/store';
import * as reducers from './store/reducers/favorites'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BooksComponent,
    FavoritesComponent,
    DetailsComponent,
    LoadingComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
