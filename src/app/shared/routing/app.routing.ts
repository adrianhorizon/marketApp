import { RouterModule } from '@angular/router';
import { PRODUCTS_ROUTES } from './products.routing';
import { LoginComponent } from 'src/app/components/login/login.component';

const APP_ROUTES = [
  { path: '',  redirectTo: 'products', pathMatch: 'full'  },
  { path: 'login', component: LoginComponent },
  { path: 'products', children: PRODUCTS_ROUTES },
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
