import { Component, OnInit } from '@angular/core';
import { OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,SimpleChanges,OnDestroy,Input } from '@angular/core';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})

let logIndex:number =1;


export class LiveComponent implements OnInit,DoCheck,OnChanges,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {
  
  
  name:string;
  //编写一个函数，用来console 数据
  logIt(msg:string){
    console.log('#${logInde++}${msg}');
  }
  ngOnChanges(changes:SimpleChanges):void{
    let name = changes['name'].currentValue;
     this.logIt('name 属性在 contructor 里面的值是'+name);
  }
  ngDoCheck():void{
    this.logIt('ngDoCheck');
  }
  ngAfterContentInit():void{
    this.logIt('ngAfterContentInit');
  }
  ngAfterContentChecked():void{
    this.logIt('ngAfterContentCheck');
  }
  ngAfterViewInit():void{
    this.logIt('ngAfterViewInit');
  }
  ngAfterViewChecked():void{
    this.logIt('ngAfterViewCheck');
  }
  ngOnDestroy():void{
    this.logIt('ngOnDestory');
  }
  
  constructor() { 
    this.logIt('name 属性在 contructor 里面的值是'+name);
  }

  ngOnInit() {
    this.logIt("ngOnInit");
  }

}
