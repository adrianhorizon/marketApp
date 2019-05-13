import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/shared/models/products.model';
import { ProductsService } from 'src/app/shared/services/Products.service';

@Component({
  selector: 'app-cart-products',
  templateUrl: './cart-products.component.html',
  styleUrls: ['./cart-products.component.scss']
})
export class CartProductsComponent implements OnInit {
  cartProducts: Products[];
  showDataNotFound = true;

  messageTitle = 'No se encontraron productos en el carrito';
  messageDescription = 'Por favor, agrega productos al carrito';

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.getCartProduct();
  }

  addToCart(product: Products) {
    this.productsService.addToCart(product);

    this.getCartProduct();
  }

  removeCartProduct(product: Products) {
    this.productsService.removeLocalCartProduct(product);

    this.getCartProduct();
  }

  getCartProduct() {
    this.cartProducts = this.productsService.getLocalCartProducts();
  }
  }
