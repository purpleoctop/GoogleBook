import { Component, OnInit } from '@angular/core';
import { Book } from '../models/Book';
import { BooksService } from '../books.service';
import { Observable } from 'rxjs';
import { map , tap } from 'rxjs/internal/operators';
import { Collection } from '../models/Collection';



@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  loading = false;
  books$: Observable<Book[]> = new Observable();
  constructor(private booksService: BooksService) { }

  ngOnInit() {
    this.loading = true;
    this.books$ = this.booksService.getBooks().pipe(
      map((books: Collection) => books.items))
      tap(() => this.loading = false)
  }

}
