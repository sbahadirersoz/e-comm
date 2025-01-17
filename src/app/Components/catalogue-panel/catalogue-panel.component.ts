import {Component, OnInit} from '@angular/core';
import {ProductEntity} from '../../models/product-entity';
import {ProductAPIService} from '../../API/ProductAPI/product-api.service';
import {Router, RouterLink} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {CartProductDto} from '../../models/CartProductDto';

@Component({
  selector: 'app-catalogue-panel',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './catalogue-panel.component.html',
  styleUrl: './catalogue-panel.component.css'
})
export class CataloguePanelComponent implements OnInit
{

  products: ProductEntity[]=[];
  favoriteProducts: ProductEntity[] = [];
  cartProducts: CartProductDto[] = [];
  ngOnInit(): void {
    this.productAPI.getAllProducts().subscribe(result => {
      const products = result.map(product =>
        new ProductEntity(product.name, product.description, product.price, product.productCategory, product.quantity)
      );
      localStorage.setItem('products', JSON.stringify(products));
    });
    const productsJson = localStorage.getItem('products');
    this.products = productsJson ? JSON.parse(productsJson) : [];
  }


  deleteProduct(productName: string): void {
    this.productAPI.deleteProductWithName(productName).subscribe
    (
    {
      next: ()=>
      {
        this.products = this.products.filter(product =>productName !== productName);
        localStorage.setItem('products',JSON.stringify(this.products));
        console.log("${product.ProductName} deleted successfully.");

      }

    }
    )
    this.products = this.products.filter(product => product.ProductName !== productName);
    localStorage.setItem('products', JSON.stringify(this.products));

  }
  selectedProductIndex: number|null = null;
  selectProduct(index: number): void
  {
    this.selectedProductIndex = index;
  }
  updateProduct(updatedProduct: ProductEntity): void {
    this.products = this.products.map(product =>
      product.ProductName === updatedProduct.ProductName ? updatedProduct : product
    );
    localStorage.setItem('products', JSON.stringify(this.products));
  }
  isFavorite(index: number): boolean {
    const product = this.products[index];
    return this.favoriteProducts.some(fav => fav.ProductName === product.ProductName);
  }


  toggleFavorite(index: number): void {
    const product = this.products[index];
    if (this.isFavorite(index)) {
      this.favoriteProducts = this.favoriteProducts.filter(fav => fav.ProductName !== product.ProductName);
    } else {
      this.favoriteProducts.push(product);
    }
    localStorage.setItem('favoriteProducts', JSON.stringify(this.favoriteProducts));
  }

  constructor(private http: HttpClient, private router: Router, private productAPI :ProductAPIService ) {
    this.http = http;
  }

  addToCartProduct(product: ProductEntity): void {
    const cartData = localStorage.getItem('cartProducts');
    const cart: CartProductDto[] = cartData ? JSON.parse(cartData) : [];

    const existingProductIndex = cart.findIndex(cartItem => cartItem.ProductName === product.ProductName);

    if (existingProductIndex === -1) {
      cart.push(new CartProductDto(product));
      console.log(`${product.ProductName} sepete eklendi.`);
    } else {
      cart[existingProductIndex].amount += 1;  // Miktarı artır
      cart[existingProductIndex].totalprice =cart[existingProductIndex].price*cart[existingProductIndex].amount ;  // Miktarı artır
      console.log(`${product.ProductName} miktarı artırıldı. Yeni miktar: ${cart[existingProductIndex].quantity}`);
    }
    localStorage.setItem('cartProducts', JSON.stringify(cart));
    console.log('Cart after update:', JSON.parse(localStorage.getItem('cartProducts') || '[]'));

  }

}
