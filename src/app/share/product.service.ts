import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  private products :Product[] = [
      new Product(1,"第一个商品",1.99,3.5,"这是第一个商品,我在学习的路上",["教育用品","硬件设施"]),
      new Product(2,"第二个商品",3.99,4.5,"第二个商品,我在学习的路上",["教育用品","安全设施"]),
      new Product(3,"第三个商品",4.99,3.5,"第三个商品,我在学习的路上",["教育用品","硬件设施"]),
      new Product(4,"第四个商品",5.99,4.5,"第四个商品,我在学习的路上",["教育用品","硬件设施"]),
      new Product(5,"第五个商品",6.99,1.5,"第五个商品,我在学习的路上",["教育用品","硬件设施"]),
      new Product(6,"第六个商品",7.99,4.5,"第六个商品,我在学习的路上",["教育用品","硬件设施"])
      
  ];
  private comments:Comment[] = [
      new Comment(1,1,"2017-02-02","SCC",2,"东西还行"),
      new Comment(2,2,"2017-02-02","WJN",2,"东西一般行"),
      new Comment(3,2,"2017-02-02","Deft",2,"东西ok"),
      new Comment(4,3,"2017-02-02","pawN",2,"东西还行"),
      new Comment(5,4,"2017-02-02","Sam",2,"东西还行"),
      new Comment(5,5,"2017-02-02","Sam",2,"东西不可以的，超级差的"),
      new Comment(5,5,"2017-02-02","Sam",2,"挺好的，下次再来把"),
      new Comment(5,5,"2017-02-02","Sam",2,"东西挺好的，下次还会来的"),
      new Comment(5,6,"2017-02-02","Sam",2,"东西没有想象中的那么好")
      ];
  constructor() { }
  
  getProducts():Product[]{
       //first function ,get all the products
      return this.products;
  }



  // secord function to get the Porduct 
  getProduct(id:number):Product{
      //lambda,return product of product.id 
      return this.products.find((product) => product.id == id);
  }
  //forth function to get comment from id
  getCommentsForProductId(id:number):Comment[]{
      //lambda ,return the comment of productid 
      return this.comments.filter((comment:Comment) => comment.productId==id);
  }
}

export class Product{
    constructor(
    public id:number,
    public title:string,
    public price:number,
    public rating:number,
    public desc:string,
    public categories:Array<string>
    
    ){}
};

export class Comment {
    constructor(
        public id:number,
        public productId:number,
        public timestamp:string,
        public user:string,
        public rating:number,
        public content: string 
        ){}
}