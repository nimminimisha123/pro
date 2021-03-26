import { Component, OnInit } from '@angular/core';
import{Product} from '../product';

@Component({
  selector: 'app-productentry',
  templateUrl: './productentry.component.html',
  styleUrls: ['./productentry.component.css']
})
export class ProductentryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 model =new Product(2,"nimmi",12,"wertygvgb")
save(){
console.log("productid",this.model.productid)
console.log("name",this.model.name)
console.log(" price",this.model.price)
console.log(" description",this.model.description)
//console.log("qty",this.model.qty)
}
}
