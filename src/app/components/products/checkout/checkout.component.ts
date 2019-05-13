import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/shared/models/products.model';
import { ProductsService } from 'src/app/shared/services/Products.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  cartProducts: Products[];
  showDataNotFound = true;
  favoriteSeason: string;
  seasons: string[] = ['Tarjeta de crédito', 'Datáfono', 'Efectivo'];
  totalValue = 0;
  totalValueDomi = 4950;
  messageTitle = 'No se encontraron productos para finalizar tu compra';
  messageDescription = 'Por favor, agrega productos al carrito';

  constructor(
    private productsService: ProductsService
    ) {}

  ngOnInit() {
    this.getCartProduct();
    this.totalValue = 0;
    this.cartProducts.forEach((product) => {
      const numberSplitted = product.price.replace(',', '');
      const totalSplited = numberSplitted.replace('$', '');
      this.totalValue += Number(totalSplited);
    });
  }

  removeCartProduct(product: Products) {
    this.productsService.removeLocalCartProduct(product);

    this.getCartProduct();
  }

  getCartProduct() {
    this.cartProducts = this.productsService.getLocalCartProducts();
  }

  confirmPay() {
    // this.snackBar.open('Pedido Confirmado', ':D', {
    //   duration: 2500
    // });
  }
}
