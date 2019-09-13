import { Component, OnInit } from '@angular/core';
import * as carriers from '../../db/carriers.json';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor() { }
  carriers = carriers.data;

  ngOnInit() {
  }

}


