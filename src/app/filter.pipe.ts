import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchTerm: any): any {
    return value.filter(function (search: any) {
      return search.name.search(new RegExp(searchTerm, 'i')) !== -1 
    })
  }

}
