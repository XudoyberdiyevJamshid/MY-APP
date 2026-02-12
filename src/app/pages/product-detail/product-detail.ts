import { Component, inject, OnInit, signal } from '@angular/core';
import { ProductService } from '../../services/product';
import { Product } from '../../modules/product';
import { CartService } from '../../services/cart';
import { CurrencyPipe, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-detail',
  imports: [CurrencyPipe],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss',
})
export class ProductDetailComponent implements OnInit {
 
  productService=inject(ProductService)
  cartService=inject(CartService)

  product=signal<Product|null>(null)
  isLoading=signal<boolean>(false)
  location=inject(Location)
  private route=inject(ActivatedRoute)

  ngOnInit():void{
 this.fetchData(+this.route.snapshot.paramMap.get('id')!)
  }

  fetchData(id:number){
    this.isLoading.set(true)
     this.productService.getProductById(id).subscribe({
      next:(data)=>{
        this.product.set(data)
        this.isLoading.set(false)
      },
      error:(err)=>{
         console.log(err);
         this.isLoading.set(false)
      }
     })
  }

  addToCart() {
    const item = this.product();
    if (item) {
      this.cartService.addToCart(item);
      alert(`${item.title} savatga qo'shildi!`); // Oddiy xabar
    }
  }

  goBack() {
    this.location.back(); // Orqaga qaytish
  }

}
