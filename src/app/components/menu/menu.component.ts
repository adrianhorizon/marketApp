import {ChangeDetectorRef, Component, OnDestroy, Input, OnInit, ViewChild} from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MatAccordion } from '@angular/material';
import { Router } from '@angular/router';
import { Products } from 'src/app/shared/models/products.model';
import { Categories } from 'src/app/shared/models/categories.model';
import { FormControl } from '@angular/forms';
import { ProductsService } from 'src/app/shared/services/Products.service';
import { CategoriesService } from 'src/app/shared/services/categories.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {

  sessionInit = 'Iniciar sesión';
  registerTitle = 'Registrate';
  addProducts = 'Agregar productos';
  closeSession = 'Cerrar Sesion';
  profileTitle = '(Mi perfil)';

  @ViewChild('productAccordion') myPanels: MatAccordion;
  products: Products[];
  categories: Categories[];
  showFiller = false;
  mobileQuery: MediaQueryList;
  ControlProduct = new FormControl();
  filteredOptions: Observable<Products[]>;

  private MobileQueryListener: () => void;

  constructor(
    public router: Router,
    private productsService: ProductsService,
    private categoriesService: CategoriesService,
    changeDetectorRef: ChangeDetectorRef, media: MediaMatcher
    ) {

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.MobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.MobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.MobileQueryListener);
  }

  ngOnInit() {
    this.getProducts();
    this.getCategories();
    this.searchProduct();
  }

  searchProduct() {
    this.filteredOptions = this.ControlProduct.valueChanges
      .pipe(
        startWith<string | Products>(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this.filter(name) : this.products)
      );
  }

  filter(name: string): Products[] {
    return this.products.filter(option =>
      option.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  getProducts() {
    this.productsService
      .index()
      .subscribe(
        (products: Products[]) => this.products = products
      );
  }

  getCategories() {
    this.categoriesService.getCategories().subscribe(
      (categories: Categories[]) => this.categories = categories
    );
  }
}
