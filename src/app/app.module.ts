import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { Routing } from './shared/routing/app.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import {NgxPaginationModule} from 'ngx-pagination';

import { MenuComponent } from './components/menu/menu.component';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { ProductsDetailComponent } from './components/products/products-detail/products-detail.component';
import { ProductsNotFoundComponent } from './components/products/products-not-found/products-not-found.component';
import { CheckoutComponent } from './components/products/checkout/checkout.component';
import { CartQuantityComponent } from './components/products/cart-quantity/cart-quantity.component';
import { CartProductsComponent } from './components/products/cart-products/cart-products.component';
import { ProductsComponent } from './components/products/products/products.component';
import { FooterComponent } from './components/footer/footer.component';

import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductsListComponent,
    ProductsDetailComponent,
    ProductsNotFoundComponent,
    CheckoutComponent,
    CartQuantityComponent,
    CartProductsComponent,
    ProductsComponent,
    FooterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    SharedModule,
    HttpClientModule,
    Routing,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
