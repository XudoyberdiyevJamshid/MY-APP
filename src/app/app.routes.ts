
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { CartComponent } from './pages/cart/cart';
import { MoviesComponent } from './pages/movies/movies';
import { ProductDetailComponent } from './pages/product-detail/product-detail';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path:'movies',
    component:MoviesComponent
  },
  {
    path:'product/:id',
    component:ProductDetailComponent
  }
];
