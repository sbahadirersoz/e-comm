import {RouterLink} from "@angular/router";
import {CurrencyPipe, NgForOf, NgIf} from '@angular/common';
import {CartProductDto} from '../../../models/CartProductDto';
import {Component, OnInit} from '@angular/core';
import {createWebpackLoggingCallback} from '@angular-devkit/build-angular/src/tools/webpack/utils/stats';

@Component({
  selector: 'app-cart',
  imports: [
    RouterLink,
    CurrencyPipe,
    NgForOf,
    NgIf
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  ngOnInit(): void
  {
    const data = localStorage.getItem('cartProducts');
    this.cartProducts  = data? JSON.parse(data) : [];
    console.log(this.cartProducts);
  }
  cartProducts  : CartProductDto[] = [];
  totalPrice = 0;
  removeFromCart(product: CartProductDto): void {
    // Ürünün dizideki index'ini bul
    const index = this.cartProducts.findIndex(value => product.ProductName === value.ProductName);
    if (index !== -1) {
      this.cartProducts = this.cartProducts.filter(value => value.ProductName !== product.ProductName);
      localStorage.setItem('cartProducts', JSON.stringify(this.cartProducts));
      console.log(`${product.ProductName} sepetteki ürünlerden çıkarıldı.`);
      this.calculateTotalPrice();
    } else {
      console.log(`${product.ProductName} sepette bulunamadı.`);
    }
  }

  decreaseAmount(product: CartProductDto)
  {
   const index = this.cartProducts.findIndex(value => value.ProductName === product.ProductName);
    if (this.cartProducts[index].amount ==
    1) {
      this.removeFromCart(this.cartProducts[index]);
    }
   if (index !== -1&& this.cartProducts[index].amount >0)
   {
     this.cartProducts[index].amount-=1;
     this.cartProducts[index].totalprice=
     this.cartProducts[index].amount*this.cartProducts[index].price;
     this.calculateTotalPrice();
     console.log("decrease amount");
   }
   console.log("product not found");
  }
  calculateTotalPrice(): void {
    this.totalPrice = this.cartProducts.reduce((total, product) => {
      return total + (product.price * product.amount);
    }, 0);
  }


  increaseAmount(product: CartProductDto) {
    const index = this.cartProducts.findIndex(value => value.ProductName === product.ProductName);
    if (this.cartProducts[index].quantity < this.cartProducts[index].amount)
    {
      throw new Error(`Invalid quantity for product: ${product.ProductName}`);
    }
    if (index !== -1)
    {
      this.cartProducts[index].amount+=1;
      this.cartProducts[index].totalprice=
        this.cartProducts[index].amount*this.cartProducts[index].price
      ;
      this.calculateTotalPrice();
      console.log("decrease amount");
    }
    console.log("product not found");

  }
}
