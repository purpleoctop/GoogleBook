import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Collection} from '../app/models/Collection';
import {Book} from '../app/models/Book';
import { map } from 'rxjs/operators';
import { collectExternalReferences } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
url = 'https://www.googleapis.com/books/v1/volumes?q=detective';
books;
constructor(private http: HttpClient) {}

  getBooks() {
    this.books = this.http.get(this.url)
    .pipe(map((collection: Collection) =>
    (this.books = collection.items.map((res) => res.volumeInfo))));
    return this.books;
  }
}
