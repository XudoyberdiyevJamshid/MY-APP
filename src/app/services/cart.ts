import { computed, Injectable, signal } from '@angular/core';
import { Product } from '../modules/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems = signal<Product[]>([]);

  count = computed(() => this.cartItems().length);

  total = computed(() => {
    return this.cartItems().reduce((acc, carr) => acc + carr.price, 0);
  });

  addToCart(product: Product) {
    this.cartItems.update((prev) => [...prev, product]);
  }

  removeFromCart(producId: number) {
    this.cartItems.update((val) => val.filter((item) => item.id != producId));
  }
}
