import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable()
export class ProductService {
  constructor(private logger:LoggerService) { }
  getproduct(): Product{
      this.logger.log('logger 方法 被调用！');
      return new Product(0,"Iphon10",89898,"最新的IPhone手机,就是牛叉！！");
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