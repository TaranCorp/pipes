import { Pipe, PipeTransform } from '@angular/core';

const Converters = {
  ['km']: 1.60934,
  ['m']: 1.60934 * 1000
}

@Pipe({
  name: 'convertDistance'
})
export class ConvertDistancePipe implements PipeTransform {
  transform(value: number, convertUnit: string): unknown {
    return !isNaN(value) 
            ? value * Converters[convertUnit]
            : '';
  }

}
