export class ProductRequestDto
{
   name:string;
   description:string;
   price:number;
   productCategory:string;
   quantity:number;

constructor(name:string, description:string, price:number,quantity:number)
{
  this.name=name;
  this.description=description;
  this.price=price;
  this.productCategory="Kitchen";
  this.quantity=quantity
}
}
