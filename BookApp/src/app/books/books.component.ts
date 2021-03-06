import { Component, OnInit } from '@angular/core';
import { Book } from '../models/Book';
import { BooksService } from '../books.service';
import { Observable } from 'rxjs';
import { map , tap } from 'rxjs/internal/operators';
import { Collection } from '../models/Collection';
import { Store } from '@ngrx/store';
import * as reducers from '../store/reducers/favorites'


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  loading = false;
  books$: Observable<Book[]> = new Observable();

  constructor(private booksService: BooksService, private store: Store<reducers.State>) { }

  ngOnInit() {
    this.loading = true;
    this.books$ = this.booksService.getBooks().pipe(
      tap(() => this.loading = false),
      map((books: Collection) => books.items))
  }
}
