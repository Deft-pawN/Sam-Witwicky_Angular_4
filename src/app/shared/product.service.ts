import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor() { }
  getproduct(): Product{
      return new Product(0,"Iphon10",89898,"最新的IPhone手机,就是牛叉！！")
  }

};

export class Product{
    constructor(
        public id:number,
        public title:string,
        public price:number,
        public desc:string){
        
    }
}