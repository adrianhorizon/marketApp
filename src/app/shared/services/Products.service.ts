import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Products } from '../root-store/state-root/models/Products';
import { environment } from 'src/environments/environment';

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient ) { }

  index(): Observable<Products[]> {
    return this.http
        .get<Products[]>(`${environment.productsApi}/products`);
  }

  show(conactId: number): Observable<Products> {
    return this.http
        .get<Products>(`${environment.productsApi}/products/${conactId}`);
  }

  create(contact: Products): Observable<Products> {
    return this.http.post<Products>(`${environment.productsApi}/products`, contact);
  }

  update(contact: Products): Observable<Products> {
    return this.http.patch<Products>(`${environment.productsApi}/products/${contact.id}`, contact);
  }

  destroy(id: number): Observable<Products> {
    return this.http.delete<Products>(`${environment.productsApi}/products/${id}`);
  }

}
