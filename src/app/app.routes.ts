import { Routes } from '@angular/router';
import { CartComponent } from './features/cart/cart';
import { ProductDetailComponent } from './features/products/product-detail/product-detail';
import { ReusableComponents } from './features/reusable-components/reusable-components';
import { MovieDetailComponent } from './features/movies/movie-detail/movie-detail';
import { MoviesComponent } from './features/movies/movies-list/movies';
import { HomeComponent } from './features/products/product-list/home';
import { FormPracticeComponent } from './features/form-practice/form-practice';
import { LoginComponent } from './features/auth/login/login';
import { AdminComponent } from './features/admin/admin';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [authGuard],
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'movies',
    component: MoviesComponent,
    canActivate: [authGuard],
  },
  {
    path: 'movies/:id',
    component: MovieDetailComponent,
    canActivate: [authGuard],
  },
  {
    path: 'product/:id',
    component: ProductDetailComponent,
    canActivate: [authGuard],
  },

  {
    path: 'reusable-component',
    component: ReusableComponents,
    canActivate: [authGuard],
  },
  {
    path: 'form',
    component: FormPracticeComponent,
    canActivate: [authGuard],
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [authGuard],
  },
];
