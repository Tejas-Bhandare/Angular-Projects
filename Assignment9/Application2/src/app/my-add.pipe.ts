import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAdd',
  standalone: true
})
export class MyAddPipe implements PipeTransform {

  transform(value1 : number, value2 : number) : number 
  {
    var sum : number = value1 + value2;
    return sum;
  }

}
