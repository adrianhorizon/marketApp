import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-products-not-found',
  templateUrl: './products-not-found.component.html',
  styleUrls: ['./products-not-found.component.scss']
})
export class ProductsNotFoundComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('title') title: string;
  // tslint:disable-next-line:no-input-rename
  @Input('description') description: string;
    constructor() { }
    ngOnInit() {
    }
}
