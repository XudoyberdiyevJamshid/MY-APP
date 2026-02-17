import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(value: number) {
    if (!value) '0 daqiqa';
    const hours = Math.floor(value / 60);
    const minute = value % 60;
    if (value > 60) {
      return `${hours} soat ${minute} daqiqa `;
    } else return `${minute} daqiqa`;
  }
}
