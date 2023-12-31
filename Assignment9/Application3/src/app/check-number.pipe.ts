import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkNumber',
  standalone: true
})
export class CheckNumberPipe implements PipeTransform {

  transform(value: number, constraint : string): any 
  {
    
    if(constraint == "Even")
    {
      if(value % 2 == 0)
        {
          return "It is Even number";
        }
        else
        {
          return "It is not Even number";
        }
    }
    else if(constraint == "Odd")
    {
      if(value % 2 != 0)
        {
          return "It is Odd number";
        }
        else
        {
          return "It is not Odd number";
        }
    }
    else if(constraint == "Prime")
    {
      if (value <= 1) {
        return "It is not Prime number";
      }
      else 
      {
        var i : number = 0;
        for (i = 2; i < Math.sqrt(value); i++) {
          if (value % i == 0) {
            return "It is not Prime number";
          }
        }
        return "It is Prime number";
      }
    }
    else if(constraint == "Perfect")
    {
      var i : number = 0;
      var sum : number = 0;
      for ( i = 1; i <= value / 2; i++)
      {
        if (value % i == 0) 
        {
          sum += i;
        }
      }
      if(sum == value)
      {
        return "It is Perfect number";
      }
      else
      {
        return "It is not Perfect number";
      }
    }
    else 
    {
      return "Please follow Specified format"
    }
    
  }

}
