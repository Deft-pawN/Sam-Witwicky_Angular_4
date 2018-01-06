import { Injectable } from '@angular/core';
import { ProductService,Product } from './product.service';

@Injectable()
export class AnotherServiceService implements ProductService{
  getproduct():Product{
      return new Product(1,"三星999",8978,"最新款的三星手机，手机牛逼")
  }
  constructor() { }

}
