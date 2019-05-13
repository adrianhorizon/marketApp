import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { RootStoreState, ProductsStoreSelectors, ProductstoreActions } from 'src/app/shared/root-store';
import { Observable } from 'rxjs';
import { Products } from 'src/app/shared/models/products.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products$: Observable<Products[]>;
  error$: Observable<any>;
  isLoading$: Observable<boolean>;

  constructor(private store$: Store<RootStoreState.State>) { }

  ngOnInit() {
    this.products$ = this.store$.pipe(
      select(ProductsStoreSelectors.selectAllProductsItems)
    );

    this.error$ = this.store$.pipe(
      select(ProductsStoreSelectors.selectProductsError)
    );

    this.isLoading$ = this.store$.pipe(
      select(ProductsStoreSelectors.selectProductsIsLoading)
    );
  }
}
