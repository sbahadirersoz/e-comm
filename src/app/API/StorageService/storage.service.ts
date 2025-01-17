import { Injectable } from '@angular/core';
import {ProductEntity} from '../../models/product-entity';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  token: string | null = null;
  constructor() { }
  saveToken(token: string) {
    localStorage.setItem('authToken', token);
  }
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }
  logout() {
    localStorage.removeItem('authToken');
  }
  saveProducts(products: ProductEntity[])
  {

    localStorage.setItem('products',JSON.stringify(products));
  }
  getProducts(): ProductEntity[]
  {
    const products = localStorage.getItem('products');
    return products ? JSON.parse(products) : [];
  }
  getFavorites():ProductEntity[]
  {
    const Favorites = localStorage.getItem('favoriteProducts');
    return  Favorites ? JSON.parse(Favorites) : [];
  }

}
