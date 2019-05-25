import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Categories } from '../models/categories.model';

@Injectable({
    providedIn: 'root'
})
export class CategoriesService {
  apiUrl: string;

  constructor(
    private http: HttpClient,
    private router: Router) {
    this.apiUrl = environment.categoriesApi;
  }

  getCategories(): Observable<Categories[]> {
    return this.http.get<Categories[]>(`${this.apiUrl}`);
  }

  getCategoriesId(id: string): Observable<any[] | Categories> {
    return this.http.get<Categories>(`${this.apiUrl}/${id}`);
  }
}
