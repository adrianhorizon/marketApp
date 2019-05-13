import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Products } from 'src/app/shared/models/products.model';
import { ProductsService } from 'src/app/shared/services/Products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsListComponent implements OnInit {

  @Input() products: Products[];
  @Input() loading: boolean;
  @Input() error: any;

  @Output() refresh = new EventEmitter();

  selectedBoolean: true;
  p = 1;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
  }

  async addToCart(product: Products) {
    this.productsService.addToCart(product);
  }
}
