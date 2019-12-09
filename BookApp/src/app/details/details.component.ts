import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
bookId = '';
book$;
  constructor(
    private detailsService:  DetailsService,
    private router: Router,
    private routerState: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.routerState.paramMap.subscribe((params)=>{
      this.bookId += params.get('id');
      this.book$= this.detailsService.getDetails(this.bookId).subscribe(book=> {

        })
    })
  }

}
