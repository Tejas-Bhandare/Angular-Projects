import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArithmeticService } from '../arithmetic.service';
import {FormsModule } from '@angular/forms';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css',
  providers : [ArithmeticService]
})

export class DemoComponent 
{
  public No1 : number = 25;
  public No2 : number = 20;
  public Sum : number = 0;
  public Substraction : number = 0;
  public Product : number = 0;

  
  constructor(private obj : ArithmeticService)
  {
    this.Sum = this.obj.Addition(this.No1, this.No2);
    this.Product = this.obj.Multiplication(this.No1, this.No2);
    this.Substraction = this.obj.Substraction(this.No1, this.No2);
  }

}
