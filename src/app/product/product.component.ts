import { Component, OnInit } from '@angular/core';
import{Product} from '../product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 model =new Product(2,"nimmi",12,"wertygvgb")
save()
{
console.log("productId",this.model.productid);
  console.log("name",this.model.name);
  console.log("Price",this.model.price);
  console.log("description",this.model.description);
  //console.log("qty",this.model.qty);
  
}
}
