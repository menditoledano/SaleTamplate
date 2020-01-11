import { Component, OnInit } from '@angular/core';
import { Review } from '../../models/review.model';
import * as reviewsData from '../../db/reviews.json';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {
  constructor() {}
  reviews: Review[] = reviewsData.data;
  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
