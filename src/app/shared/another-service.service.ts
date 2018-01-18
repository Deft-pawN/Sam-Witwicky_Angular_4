import { Injectable } from '@angular/core';
import { ProductService,Product } from './product.service';
import { LoggerService } from './logger.service';
@Injectable()
export class AnotherServiceService {
  getproduct():Product{
      return new Product(1,"三星999",8978,"最新款的三星手机，手机牛逼")
  }
 constructor(private logger:LoggerService) { }

}
