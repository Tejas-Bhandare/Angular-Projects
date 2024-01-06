import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ArithmeticService {

  constructor() { }

  Addition(No1 :number, No2 : number) 
  {
    return No1 + No2;
  }
  Multiplication(No1 :number, No2 : number) 
  {
    return No1 * No2;
  }
  Substraction(No1 :number, No2 : number) 
  {
    return No1 - No2;
  }
}
