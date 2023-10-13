import { Pipe, PipeTransform } from '@angular/core';
import { Maybe } from 'graphql/jsutils/Maybe';

@Pipe({
  name: 'localDate',
})
export class LocalDatePipe implements PipeTransform {
  transform(date: Maybe<string>, format: Maybe<string>): string {
    if (!date) {
      return '-';
    }
    const locale = navigator.language || 'de-DE';
    const options: Intl.DateTimeFormatOptions = {};

    if (format === 'calendar') {
      options.year = '2-digit';
      options.month = 'short';
      options.day = 'numeric';
      options.hour = 'numeric';
      options.minute = 'numeric';

    } else if (format === 'short') {
      options.year = 'numeric';
      options.month = 'short';
      options.day = 'numeric';
      options.hour = 'numeric';
      options.minute = 'numeric';

    } else if (format === 'medium') {
      options.weekday = 'long';
      options.year = 'numeric';
      options.month = 'short';
      options.day = 'numeric';
      options.hour = 'numeric';
      options.minute = 'numeric';
    }

    return new Intl.DateTimeFormat(locale, options).format(new Date(date));
  }
}
