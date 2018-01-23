import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any[], filterField:string,keyword:string): any {
    //判断有没有传,keyword,filter
    if(!filterField||!keyword){
      return list;
    }
    return list.filter(item => {
      //取得当前字段 
      let fieldValue = item[filterField];
      return fieldValue.indexOf(keyword) >= 0;
    });
    
    
  }

}
