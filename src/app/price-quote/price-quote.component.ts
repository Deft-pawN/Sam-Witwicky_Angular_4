import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-quote',
  templateUrl: './price-quote.component.html',
  styleUrls: ['./price-quote.component.css']
})
export class PriceQuoteComponent implements OnInit {
  stockCode:string="IBM";
  lastPrice:number;
  
  constructor() {
    setInterval(()=>{
      let priceQuote：PriceQuote = new PriceQuote(this.stockCode,100*Math.random());
      this.price = priceQuote.lastPrice
    },1000)
    
  }
  ngOnInit() {
  }

}
//股票结构
export class PriceQuote{
  constructor(
    public stockCode:string,
    public lastPrice:number
    ){
    
  }
}
