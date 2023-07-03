import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe<T> implements PipeTransform {

  public transform(items?: T[], param?: T): T[] | undefined {
    if (!items || !param) {
      return items;
    }

    return items.filter(element => this.matchesFilter(element, param));
  }

  private matchesFilter(item: T, param: T): boolean {
    for (const key in param) {
      if (Object.prototype.hasOwnProperty.call(param, key)) {
        const filterValue = param[key];
        const itemValue = item[key];

        if (typeof filterValue === 'object' && typeof itemValue === 'object') {
          if (!this.matchesFilter(itemValue as T, filterValue as T)) {
            return false;
          }
        } else if (filterValue !== itemValue) {
          return false;
        }
      }
    }

    return true;
  }
}