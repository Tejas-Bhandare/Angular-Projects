import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }

  CheckPrime(Value : number)
  {
    if(Value <= 1)
    {
      return "Enter the numbers bigger than 1"
    }

    else
    {
      for(let i = 2; i <= Math.sqrt(Value); i++)
      {
        if(Value % i == 0)
        {
          return Value+" is not Prime number";
        }
      }
      return Value+" is a Prime number";
    }
    
  }
}
