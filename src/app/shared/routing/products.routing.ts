import { ProductsDetailComponent } from '../../components/products/products-detail/products-detail.component';
import { CartProductsComponent } from '../../components/products/cart-products/cart-products.component';
import { CheckoutComponent } from '../../components/products/checkout/checkout.component';
import { ProductsComponent } from 'src/app/components/products/products/products.component';

export const PRODUCTS_ROUTES = [
  { path: '', component: ProductsComponent },
  { path: 'detail/:id', component: ProductsDetailComponent },
  { path: 'cart-items', component: CartProductsComponent },
  { path: 'checkout', component: CheckoutComponent }
];
