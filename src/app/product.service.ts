import { Injectable } from '@angular/core';
import {HttpClient,HttpClientModule} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
 constructor(private http:HttpClient) { 
this.http=http
}
getlist(){
return this.http.get("http://localhost:4200/assets/product.json") 
}
  }

