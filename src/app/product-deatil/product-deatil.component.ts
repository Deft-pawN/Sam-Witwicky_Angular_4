import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule,ActivatedRoute } from '@angular/router';
import { ProductService } from './share/product.service';
@Component({
  selector: 'app-product-deatil',
  templateUrl: './product-deatil.component.html',
  styleUrls: ['./product-deatil.component.css']
})
export class ProductDeatilComponent implements OnInit {
  //productTitle :string; 
  product:Product;
  constructor(private routerInfo:ActivatedRoute,private productService:ProductService) { }

  ngOnInit() {
    //参数快照 
    let productId:number = this.routerInfo.snapshot.params["ProductId"];
    this.product = this.productService.getProduct(productId)//get the id of product
    
    //this.productTitle = this.routerInfo.snapshot.params["prodTitle"];
  }

}
