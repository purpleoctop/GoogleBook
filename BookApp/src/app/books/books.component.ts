import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Collection} from '../models/Collection';
import {Book} from '../models/Book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  books: Book[] = [];
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
   this.httpClient.get('https://www.googleapis.com/books/v1/volumes?q=detective')
   .subscribe((collection: Collection) => {
       this.books = collection.items.map((a) => a.volumeInfo);
   });

  }

}
