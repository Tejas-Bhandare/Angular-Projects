import { Component } from '@angular/core';
import { StringService } from '../string.service';
import { NumberService } from '../number.service';


@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  providers : [NumberService, StringService]
})
export class ChildComponent 
{

  public result : string = "";
  public str : string ="Hello Manya";
  public capitalCount : number = 0;
  public Num : number = 173;

  constructor(private obj1 : NumberService, private obj2 : StringService)
  {
    this.result = this.obj1.CheckPrime(this.Num);
    this.capitalCount = this.obj2.CountCapital(this.str);
  }

}
