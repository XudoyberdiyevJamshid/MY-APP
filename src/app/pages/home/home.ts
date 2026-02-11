import { ProductService } from './../../services/product';
import { Component, inject, OnInit, signal } from '@angular/core';
import { Product } from '../../modules/product';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-home',
  imports: [CurrencyPipe],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent implements OnInit {
  products = signal<Product[]>([]);
  isLoading = signal<boolean>(false);

  private productService = inject(ProductService);
  private cartService = inject(CartService);

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.isLoading.set(true);

    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products.set(data);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.log(err);
        this.isLoading.set(false);
      },
    });
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
