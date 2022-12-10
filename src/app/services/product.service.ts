import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  // Les méthodes GET


  getAllProducts():Observable<Product[]>{
    let URL=environment.host;
    return this.http.get<Product[]>(URL+'/products').pipe();
  }

  getSelectedProducts():Observable<Product[]>{
    let URL=environment.host;
    return this.http.get<Product[]>(URL+'/products?selected=true').pipe();
  }
  
  getAvailabledProducts():Observable<Product[]>{
    let URL=environment.host;
    return this.http.get<Product[]>(URL+'/products?availabe=true').pipe();
  }
}
