import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the CountingConverterPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'countingConverter',
})
export class CountingConverterPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: number, ...args) {
    let newValue = '';
    switch (value) {
      case 1:
        return 'First';
        break;
      case 2:
        return 'Second';
        break;
      case 3:
        return 'Third';
        break;
      case 4:
        return 'Fourth';
        break;
      case 5:
        return 'Fifth';
        break;
      case 6:
        return 'Sixth';
        break;
      case 7:
        return 'Seventh';
        break;
      case 8:
        return 'Eighth';
        break;
      case 9:
        return 'Ninth';
        break;
      case 10:
        return 'Tenth';
        break;

      default:
        break;
    }
    return newValue;
  }
}
