import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Routes, RouterModule } from '@angular/router';
@Component({
  selector: 'app-product-deatil',
  templateUrl: './product-deatil.component.html',
  styleUrls: ['./product-deatil.component.css']
})
export class ProductDeatilComponent implements OnInit {
  productTitle :string; 
  constructor(private routerInfo:ActivatedRoute) { }

  ngOnInit() {
    //参数快照 
    this.productTitle = this.routerInfo.snapshot.params["prodTitle"];
  }

}
