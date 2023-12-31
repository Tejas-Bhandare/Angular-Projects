import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-display-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display-text.component.html',
  styleUrl: './display-text.component.css'
})
export class DisplayTextComponent 
{
  public text : String = "Marvellous Infosystems";
  public displayString : String = "";
  public Display (type : string)
  {
    if(type == 'UPPER')
    {
      this.displayString = this.text.toUpperCase();
    }
    else if(type == 'LOWER')
    {
      this.displayString = this.text.toLowerCase();
    }
  }
}
