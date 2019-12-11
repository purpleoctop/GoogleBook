import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsService } from '../details.service';
import { Book } from '../models/Book';
import { takeWhile } from 'rxjs/operators';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
 
  bookId = '';
  book$: Observable<Book> = new Observable();
  private alive = true;


  constructor(
    private detailsService: DetailsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params
    .pipe(takeWhile(() => this.alive))
    .subscribe(res => {
      this.book$ = this.detailsService.getDetails(res.id);
    });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
