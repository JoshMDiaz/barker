import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "commaSpace"
})
export class CommaSpacePipe implements PipeTransform {
  transform(value: Array<string>, ...args) {
    return value.join(", ");
  }
}
