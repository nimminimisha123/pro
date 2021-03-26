import { Component, OnInit } from '@angular/core';
import{ProductService} from '../product.service'
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  productlist:any
  i:any
constructor(private ps:ProductService) { 
this.ps=ps
}

ngOnInit(): void {
this.ps.getlist().subscribe((data)=>{
this.productlist=data
})
}
}
