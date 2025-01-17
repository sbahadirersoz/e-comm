import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductEntity} from '../../models/product-entity';
import {AuthAPI} from '../AuthAPI';
import {ProductRequestDto} from '../../models/ProductRequestDto';
@Injectable({
  providedIn: 'root'
})
export class ProductAPIService {

productUrl:String = 'http://localhost:8222/api/v1/products';
  constructor(private http: HttpClient,private authAPI:AuthAPI) {
  }
  getAllProducts(): Observable<any[]>
  {
    return this.http.get<ProductEntity[]>(`${this.productUrl}/getAllProducts`,
      {
        headers: new HttpHeaders
        (
          {
            'content-type': 'application/json; charset=utf-8',
            'Authorization': 'Bearer ' + this.authAPI.getToken()
          }
        )
      }
    );
  }
  deleteProductWithName(name: string): Observable<any> {
    const url = `${this.productUrl}/deleteProductBy/name/${encodeURIComponent(name)}`;
    return this.http.delete(url, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization': 'Bearer ' + this.authAPI.getToken()
      })
    });
  }
  createProduct(product:ProductRequestDto): Observable<any>
  {
    return this.http.post<ProductEntity>(`${this.productUrl}/createAProduct`, product,
      {
        headers:
          new HttpHeaders
          (
            {
            'Content-Type': 'application/json; charset=utf-8',
            'Authorization': 'Bearer ' + this.authAPI.getToken()
          }
          )
      })
  }
}
