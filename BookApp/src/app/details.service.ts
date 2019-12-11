import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './models/Book';
@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private http: HttpClient) { }
  host = 'https://www.googleapis.com/books/v1/volumes';
  stars :  number;
  
  getDetails(bookId: string) {
    const url = `${this.host}/${bookId}`;
    return this.http.get<Book>(url);
  }

  getStars(){

  }
}
