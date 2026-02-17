import { Component, input, output } from '@angular/core';

import { RouterLink } from '@angular/router';
import { CurrencyPipe, LowerCasePipe } from '@angular/common';
import { Product } from '../../../modules/product';
import { TruncatePipe } from '../../../shared/pipes/truncate-pipe';
import { CapitalizePipe } from '../../../shared/pipes/capitalize-pipe';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink, CurrencyPipe, TruncatePipe, LowerCasePipe, CapitalizePipe],
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
