import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(values: any[], searchTerm: any): any {
    searchTerm = searchTerm.toUpperCase();

    return values.filter(v => 
      v.name?.toUpperCase().includes(searchTerm) || 
      v.cnp?.toUpperCase().includes(searchTerm) ||
      v.doctor?.toUpperCase().includes(searchTerm)
    )
  }

}
