import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {CartProductDto} from '../../../models/CartProductDto';
import {ProductRequestDto} from '../../../models/ProductRequestDto';
import {ProductAPIService} from '../../../API/ProductAPI/product-api.service';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-product-factory',
  imports: [
    RouterLink,
    FormsModule,
    NgIf
  ],
  templateUrl: './product-factory.component.html',
  styleUrl: './product-factory.component.css'
})

export class ProductFactoryComponent
{
productRequestDto:ProductRequestDto= new  ProductRequestDto("","",0,0);
errorMessage  : string = "";
constructor(private http: HttpClient,private api:ProductAPIService )
{
}
createProduct(productRequestDto:ProductRequestDto)
{
this.api.createProduct(productRequestDto).subscribe
(
  result =>
  {
    console.log('Ürün başarıyla eklendi:', result);
  },
  (error: HttpErrorResponse) => {
    if (error.status === 500) {
      this.errorMessage = 'Sunucuda bir hata oluştu. Lütfen tekrar deneyin.';
    } else {
      this.errorMessage = 'Ürün Zaten Bulunmakta lütfen başka bir ürün ekleyiniz';
    }
    console.error('Hata:', error);
  })
}
}
