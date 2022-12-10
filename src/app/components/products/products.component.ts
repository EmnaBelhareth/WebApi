import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productsList!:Product[];

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }

  OnGetAllProducts(){
    this.productService.getAllProducts().subscribe(
      (data)=>{
        this.productsList=data;
      },(error)=>{
        console.log(error);
      }
    );

  }
  OngetSelectedProducts(){
    this.productService.getSelectedProducts().subscribe(
      (data)=>{
        this.productsList=data;
      },(error)=>{
        console.log(error);
      }
    );

  }
  OngetAvailabeProducts(){
    this.productService.getAvailabledProducts().subscribe(
      (data)=>{
        this.productsList=data;
      },(error)=>{
        console.log(error);
      }
    );

  }

}
