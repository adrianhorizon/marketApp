import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/shared/models/products.model';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { RootStoreState, ProductsStoreSelectors } from 'src/app/shared/root-store';
import { ProductsService } from 'src/app/shared/services/Products.service';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.scss']
})
export class ProductsDetailComponent implements OnInit {
  productId: string;
  product$: Observable<Products>;
  error$: Observable<any>;
  isLoading$: Observable<boolean>;

  constructor(
    private route: ActivatedRoute,
    private store$: Store<RootStoreState.State>,
    private productsService: ProductsService) {
    const productIdParam = this.route.snapshot.paramMap.get('id');
    this.productId = productIdParam;
  }

  ngOnInit() {
    this.product$ = this.store$.pipe(
      select(ProductsStoreSelectors.selectProductsById(this.productId))
    );

    this.error$ = this.store$.pipe(
      select(ProductsStoreSelectors.selectProductsError)
    );

    this.isLoading$ = this.store$.pipe(
      select(ProductsStoreSelectors.selectProductsIsLoading)
    );
  }

  async addToCart(product: Products) {
    this.productsService.addToCart(product);
  }
}
