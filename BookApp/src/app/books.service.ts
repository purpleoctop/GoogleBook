import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BooksService {
  url = 'https://www.googleapis.com/books/v1/volumes?q=detective';
  books;
  constructor(private http: HttpClient) { }

  getBooks() {
    return this.http.get(this.url);
  }
}
