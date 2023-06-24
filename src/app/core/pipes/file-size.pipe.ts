import { Pipe, PipeTransform } from '@angular/core';
import { Maybe } from 'src/schema/schema';

@Pipe({
  name: 'fileSize'
})
export class FileSizePipe implements PipeTransform {

  public transform(size?: Maybe<number>): string {
    const kilobyte = 1024;
    const megabyte = kilobyte * 1024;
    const gigabyte = kilobyte * 1024;

    if (size) {
      if (size >= gigabyte) {
        return `${(size / gigabyte).toFixed(2)} GB`;
      } else if (size >= megabyte) {
        return `${(size / megabyte).toFixed(2)} MB`;
      } else if (size >= kilobyte) {
        return `${(size / kilobyte).toFixed(2)} kB`;
      } else {
        return `${size} bytes`;
      }
    }
    return '';
  }
}
