import { Component, input, output } from '@angular/core';

import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { Product } from '../../../modules/product';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
  product = input.required<Product>();

  add = output<Product>();

  addToCart(product: Product) {
    this.add.emit(this.product());
  }
}
