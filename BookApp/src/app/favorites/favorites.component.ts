import { Component, OnInit } from '@angular/core';
import { Book } from '../models/Book';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as reducers from '../store/reducers/favorites';
import * as favorites from '../store/actions/favorites';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  books$: Observable<Book[]>;
  constructor(private store: Store<reducers.State>) {
    this.books$ = store.pipe(select('favBooks'));
  }

  ngOnInit() {
    this.books$.subscribe(res => console.log(res));
  }

  addToFavorites(book: Book) {
    this.store.dispatch(new favorites.LikeBookAction(book))
  }

}
