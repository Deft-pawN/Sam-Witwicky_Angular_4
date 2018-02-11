import { Component,OnInit,ViewChild,AfterViewChecked,AfterViewInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewChecked,AfterViewInit{
  
  @ViewChild("child1")
  child1:ChildComponent
  
  ngAfterViewInit():viod {
    console.log('父组件的视图初始化完毕')
  }
  ngAfterViewChecked():viod {
    console.log('父组件的视图变更检测完毕')
  }
  
  ngOninit():viod{
    setInterval(() =>{
      this.child1.greetings("Tom");
    },5000);
  
  }
  
  
  title = 'Sam-Witwicky';
  
  greeting:string = "Hello";
  user:{name:string} ={name:"Tom"};
  

  constructor(){
    
  }
}
