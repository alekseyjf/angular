import { Pipe, PipeTransform } from '@angular/core';
import { Color } from './models/colors'

@Pipe({
  name: 'rgb',
  pure: false//default : true - мутация объекта
})
export class RgbPipe implements PipeTransform {

  transform(value: Color, args?: any): any {

    return `rgb(${value.red}, ${value.green}, ${value.blue})`

  }

}
