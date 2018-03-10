import { Pipe, PipeTransform } from '@angular/core';
import { Colors } from './models/colors';

@Pipe({
  name: 'rgb',
  pure: false
})
export class RgbPipe implements PipeTransform {

  transform(value: Colors, args?: any): string {
    return `rgb(${value.red},${value.green},${value.blue})`;
  }

}
