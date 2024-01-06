import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  public count : number = 0;

  constructor() { }

  CountCapital(str : string)
  {
    for(let i = 0; i < str.length; i++)
    {
      if(str[i] >= 'A' && str[i] <= 'Z')
      {
        this.count++;
      }
    }
    return this.count;
  }
}
