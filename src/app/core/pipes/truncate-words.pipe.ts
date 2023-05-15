import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'truncateWords'})
export class TruncateWordsPipe implements PipeTransform {
  transform(value: string | null | undefined, length: number, symbol = '…') {
    if (value) {
      const truncated = value.split(' ').slice(0, length).join(' ');
      return truncated.length == value.length ? truncated : truncated + symbol;
    } else {
      return value
    }
  }
}
