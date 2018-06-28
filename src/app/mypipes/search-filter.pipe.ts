import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    
    if(args===undefined){
      return value
    }

    return value.filter(function(v){
      return v.name.toLowerCase().includes(args.toLowerCase())
    })
  }

}
