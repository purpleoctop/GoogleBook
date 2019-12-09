import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DetailsService } from '../details.service';
import { Book } from '../models/Book';
import { Collection } from '../models/Collection';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  bookId = '';
  book: Book;
  constructor(
    private detailsService: DetailsService,
    private router: Router,
    private routerState: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.routerState.paramMap.subscribe((params) => {
      this.bookId += params.get('id');
      this.detailsService.getDetails(this.bookId).subscribe((book) =>
        this.book = book
      );
    });
  }

  showbook(){
    console.log(this.book);
  }

}
