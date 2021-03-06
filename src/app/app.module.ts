import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import { StarsComponent } from './stars/stars.component';
import { SearchComponent } from './search/search.component';
import { ChatComponent } from './chat/chat.component';
import { ProductDeatilComponent } from './product-deatil/product-deatil.component';
import { HomeComponent } from './home/home.component';
import { ProductService } from './share/product.service';
import { FilterPipe } from './pipes/filter.pipe';
import {FormBuilder, FormGroup, FormControl,ReactiveFormsModule,FormsModule} from '@angular/forms';
import { LiveComponent } from './live/live.component';
import { ChildComponent } from './child/child.component'

//自动生成
const routeConfig:Routes = [
  {path:"",component:HomeComponent},
  {path:"product/:ProductId",component:ProductDeatilComponent}
  ]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    ProductComponent,
    StarsComponent,
    SearchComponent,
    ChatComponent,
    ProductDeatilComponent,
    HomeComponent,
    FilterPipe,
    LiveComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routeConfig),
    FormsModule,
    //使用forRoot 进行主模块进行注入设置
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
