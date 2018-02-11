import { Component, OnInit,Input,OnChanges,SimpleChanges,DoCheck} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges,DoCheck,AfterViewChecked,AfterViewInit{
  
  
  
  @Input()
  greeting:string;
  

  @Input()
  user:{name:"Tom"};
  
  message:string = "初始化消息";
  oldUsername:string;
  changeDeteled:boolean = false;
  noChangeCount:number = 0;
  
  greetings(name:string){
    console.log("Hello"+name);
  }
  constructor() { }
  
  ngAfterViewInit():void{
    console.log('子组件的变更检测机制初始化完毕';
  }
  ngAfterViewChecked():void{
    
    console.log('子组件的视图变更检测完毕';
  }
  
  
  
  
  ngOnInit() {
  }
  ngOnChanges(changes:SimpleChanges):void {
    console.log(JSON.stringify(changes,null,2));
  }
  ngDoCheck():void{
    if(this.user.name!==this.oldUsername){
      this.changeDeteled = true;
      console.log('DoCheck:user.name从'+this.oldUsername+"变成了"+this.user.name);
      this.oldUsername =this.user.name;
      
    }else{
      this.noChangeCount += 1;
      console.log("Docheck:user.name没有变化的时候ngDochck方法已经被调用"+this.noChangeCount);
    }
    this.changeDeteled = false;
  }
}
