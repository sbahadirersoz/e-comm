import {Component, OnInit, TemplateRef} from '@angular/core';
import {RouterLink} from "@angular/router";
import {CommonModule, CurrencyPipe, NgClass, NgForOf, NgIf} from '@angular/common';
import {ProductEntity} from '../../../models/product-entity';
import {StorageService} from '../../../API/StorageService/storage.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-favorites',
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent implements OnInit {
  favoriteProducts: ProductEntity[]=[];
    ngOnInit(): void
    {
      this.favoriteProducts = this.sessionService.getFavorites();
    }
  constructor(private  sessionService:StorageService)
  {

  }
  isFavorite(index: number): boolean {
    const product = this.favoriteProducts[index];
    return this.favoriteProducts.some(fav => fav.ProductName === product.ProductName);
  }

  removeFavorite(product: ProductEntity): void {
    this.favoriteProducts = this.favoriteProducts.filter(fav => fav.ProductName != product.ProductName);
    localStorage.setItem('favoriteProducts', JSON.stringify(this.favoriteProducts));
  }
}
