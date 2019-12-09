import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './models/Book';
import { map } from 'rxjs/operators';
import { Collection } from '../app/models/Collection';



@Injectable({
  providedIn: 'root'
})
export class BooksService {
url = 'https://www.googleapis.com/books/v1/volumes?q=detective';
books;
constructor(private http: HttpClient) {}

getBooks() {
  return this.http.get(this.url);
}
}
