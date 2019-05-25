import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Products } from '../models/products.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  api: string;
  navbarCartCount = 0;

  constructor(
    private http: HttpClient) {
    this.api = environment.productsApi;
   }

  index(): Observable<Products[]> {
    return this.http
        .get<Products[]>(`${this.api}`);
  }

  show(productsId: number): Observable<Products> {
    return this.http
        .get<Products>(`${this.api}/${productsId}`);
  }

  create(products: Products): Observable<Products> {
    return this.http.post<Products>(`${this.api}`, products);
  }

  update(products: Products): Observable<Products> {
    return this.http.patch<Products>(`${this.api}/${products.id}`, products);
  }

  destroy(id: string): Observable<Products> {
    return this.http.delete<Products>(`${this.api}/${id}`);
  }

  addToCart(data: Products): void {
    const productLocal: Products[] = JSON.parse(localStorage.getItem('product-item-local')) || [];

    productLocal.push(data);

    localStorage.setItem('product-item-local', JSON.stringify(productLocal));
    this.calculateLocalCartProdCounts();

  }

  removeLocalCartProduct(product: Products) {
    const products: Products[] = JSON.parse(localStorage.getItem('product-item-local'));

    for (let i = 0; i < products.length; i++) {
      if (products[i].id === product.id) {
        products.splice(i, 1);
        break;
      }
    }
    localStorage.setItem('product-item-local', JSON.stringify(products));

    this.calculateLocalCartProdCounts();
  }

  getLocalCartProducts(): Products[] {
  const products: Products[] = JSON.parse(localStorage.getItem('product-item-local')) || [];
  return products;
  }

  calculateLocalCartProdCounts() {
    this.navbarCartCount = this.getLocalCartProducts().length;
  }

}
