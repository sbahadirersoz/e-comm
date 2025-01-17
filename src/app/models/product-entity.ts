
export class ProductEntity
{
   ProductName:string;
   Desc:String;
   price:number;
   ProductCategory:String;
  quantity:number;
  constructor(ProductName:string, Desc:String, price:number, ProductCategory:String,quantity:number)
  {
    this.ProductName = ProductName;
    this.Desc = Desc;
    this.price = price;
    this.ProductCategory = ProductCategory;
    this.quantity = quantity;
  }

}
