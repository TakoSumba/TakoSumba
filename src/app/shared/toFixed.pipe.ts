import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'toFixed',
  pure: true
})

export class ToFixed implements PipeTransform {
  transform(value: number, decimals: number) {
    return value.toFixed(decimals);
  }
}
