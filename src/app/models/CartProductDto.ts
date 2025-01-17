import {ProductEntity} from './product-entity';

export class CartProductDto
{

  ProductName:string;
  price:number;
  quantity:number;
  amount:number;
  totalprice:number;
  constructor(product : ProductEntity)
  {
    this.ProductName= product.ProductName;
    this.price= product.price;
    this.quantity = product.quantity;
    this.amount=1;
    this.totalprice = product.price* this.amount;
  }
}
