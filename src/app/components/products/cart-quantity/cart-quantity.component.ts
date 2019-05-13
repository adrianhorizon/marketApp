import { Component, OnInit, Input, SimpleChanges, OnChanges, SimpleChange } from '@angular/core';
import { Products } from 'src/app/shared/models/products.model';

@Component({
  selector: 'app-cart-quantity',
  templateUrl: './cart-quantity.component.html',
  styleUrls: ['./cart-quantity.component.scss']
})
export class CartQuantityComponent implements OnInit, OnChanges {
@Input() products: Products[];

totalValue = 0;
constructor() {}

ngOnChanges(changes: SimpleChanges) {
  const dataChanges: SimpleChange = changes.products;

  const products: Products[] = dataChanges.currentValue;
  this.totalValue = 0;
  products.forEach((product) => {
    const numberSplitted = product.price.replace(',', '');
    const totalSplited = numberSplitted.replace('$', '');
    this.totalValue += Number(totalSplited);
  });
}

ngOnInit() {}

}
