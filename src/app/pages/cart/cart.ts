import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class CartComponent {
  cartService = inject(CartService);

  removeItem(id: number) {
    this.cartService.removeFromCart(id);
  }
}
