import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countingConverter',
})
export class CountingConverterPipe implements PipeTransform {

  transform(value: number, ...args) {
    let newValue = '';
    switch (value) {
      case 1:
        newValue = 'First';
        break;
      case 2:
        newValue = 'Second';
        break;
      case 3:
        newValue = 'Third';
        break;
      case 4:
        newValue = 'Fourth';
        break;
      case 5:
        newValue = 'Fifth';
        break;
      case 6:
        newValue = 'Sixth';
        break;
      case 7:
        newValue = 'Seventh';
        break;
      case 8:
        newValue = 'Eighth';
        break;
      case 9:
        newValue = 'Ninth';
        break;
      case 10:
        newValue = 'Tenth';
        break;

      default:
        break;
    }
    return newValue;
  }
}
