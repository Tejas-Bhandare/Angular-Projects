import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{
  title = 'Application4';

  public Data : string = "";
  public dataLength : number = 0;

  onInputChange (event : Event)
  {
    var inputElement = event?.target as HTMLTextAreaElement;
    this.Data = inputElement.value;
    this.dataLength = inputElement.value.length;
  }

}
