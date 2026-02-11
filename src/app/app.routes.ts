import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { CartComponent } from './pages/cart/cart';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
];
