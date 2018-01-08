import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ProductService } from '../share/product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  private products:Array<Product>;
  constructor(private prodct:ProductService) {}

  ngOnInit() {
    this.products=this.prodct.getProducts();//get all the product Info
  }

}
export class Product {
  
  constructor(
    public id:number,
    public title:string,
    public price:number,
    public rating:number,
    public desc:string,
    public categories:Array<string>
    ){}
}
