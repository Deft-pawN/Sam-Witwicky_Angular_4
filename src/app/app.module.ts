import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Product1Component } from './product1/product1.component';
import { ProductService } from './shared/product.service';
import { Product2Component } from './product2/product2.component';
import { LoggerService } from './shared/logger.service';
import { AnotherServiceService } from './shared/another-service.service';
import { BindComponent } from './bind/bind.component';
import { MultiplePipe } from './pipe/multiple.pipe';
import { OrderComponent } from './order/order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PriceQuoteComponent } from './price-quote/price-quote.component';
@NgModule({
  declarations: [
    AppComponent,
    Product1Component,
    Product2Component,
    BindComponent,
    MultiplePipe,
    OrderComponent,
    PriceQuoteComponent
  ],
  imports: [
    BrowserModule,
     FormsModule,
  ],
  providers: [{provide:ProductService,useFactory:(logger:LoggerService,appConfig)=>{
    //创建userfactory的函数,使用的是匿名函数的方式 
    //let logger = new LoggerService();//创建一个
    let dev = Math.random() >0.5;//创建一个随机数，并且判定是不是大于5,返回true /false 
    if(appConfig.isDev){
      return new ProductService(logger);
    }else{
      return new AnotherServiceService(logger);
     }
    },
    deps:[LoggerService,"APP_CONFIG"]
  },LoggerService,{
    provide:"APP_CONFIG",useValue:{isDev:true}//第三个provider,token 是一个字符串，第二个参数是usevalue，是一个明确的值 
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
