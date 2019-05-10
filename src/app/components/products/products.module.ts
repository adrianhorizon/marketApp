import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsDetailComponent } from './products-detail/products-detail.component';
import { ProductsNotFoundComponent } from './products-not-found/products-not-found.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartQuantityComponent } from './cart-quantity/cart-quantity.component';
import { CartProductsComponent } from './cart-products/cart-products.component';
import { ProductsRoutingModule } from './products.routing';

@NgModule({
  declarations: [
    ProductsListComponent,
    ProductsDetailComponent,
    ProductsNotFoundComponent,
    CheckoutComponent,
    CartQuantityComponent,
    CartProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
