import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortPipe'
})
export class SortPipePipe implements PipeTransform {

  transform(value: any, args?: any): any { 

    if(args === 'asc'){
      return value.sort(sortNumber)
    }else if(args === 'dsc'){
      return value.sort(sortNumber).reverse();
    }
    return value.sort(sortNumber);
    function sortNumber(a, b){
      return a-b
  }
      
  
  
}
}
