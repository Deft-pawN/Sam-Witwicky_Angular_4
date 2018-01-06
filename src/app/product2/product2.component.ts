import { Component, OnInit } from '@angular/core';
import { ProductService,Product } from '../shared/product.service';
import { AnotherServiceService } from '../shared/another-service.service';
@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.css'],
  providers:[{provide:ProductService,useClass:AnotherServiceService}]
})
export class Product2Component implements OnInit {
  
  product:Product;
  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.product  = this.productService.getproduct();
  }

}