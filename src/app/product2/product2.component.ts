import { Component, OnInit,Injector } from '@angular/core';
import { ProductService,Product } from '../shared/product.service';
@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.css'],
  //providers:[{provide:ProductService,useClass:AnotherServiceService}]
})
export class Product2Component implements OnInit {
  
  product:Product;
  constructor(private productService:ProductService) { }
  //private productService:ProductServicex
  /*
constructor(private injector:Injector ) { 
  this.productService = injector.get(ProductService);
}
   */
  ngOnInit() {
    this.product  = this.productService.getproduct();
  }

}