import {Component, OnInit} from '@angular/core';
import * as carriers from '../../db/carriers.json';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  constructor() {}
  carriers = carriers.data;
  clicked(index) {
    // only show clicked img info
    console.log(this.carriers[index]);
    // @ts-ignore
    this.carriers[index].show = !this.carriers[index].show;
  }
  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
