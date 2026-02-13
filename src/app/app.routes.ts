import { Routes } from '@angular/router';
import { CartComponent } from './features/cart/cart';
import { ProductDetailComponent } from './features/products/product-detail/product-detail';
import { ReusableComponents } from './features/reusable-components/reusable-components';
import { MovieDetailComponent } from './features/movies/movie-detail/movie-detail';
import { MoviesComponent } from './features/movies/movies-list/movies';
import { HomeComponent } from './features/products/product-list/home';
import { FormPracticeComponent } from './features/form-practice/form-practice';

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
    path: 'movies',
    component: MoviesComponent,
  },
  {
    path: 'movies/:id',
    component: MovieDetailComponent,
  },
  {
    path: 'product/:id',
    component: ProductDetailComponent,
  },

  {
    path: 'reusable-component',
    component: ReusableComponents,
  },
  {
    path: 'form',
    component: FormPracticeComponent,
  },
];
