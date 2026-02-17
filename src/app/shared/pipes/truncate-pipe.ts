import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, length: number, sybmol: string = '...') {
    if (!value) return value;
    if (value.length > length) {
      return value.slice(0, length) + `${sybmol}`;
    } else {
      return value;
    }
  }
}
