import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pad'
})
export class PadPipe implements PipeTransform {

  transform(value: number): string {
    return value < 10 ? '0' + value : value.toString();
  }

}
