import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Application3';

  public displayText: string = "Marvellous Innfosystems";
  public alternateText: string = "Educating for better tomorrow";
  public isclicked : boolean = false;

  public changeText()
  {
    this.isclicked = ! this.isclicked;
    this.displayText = this.isclicked ? this.alternateText : "Marvellous Innfosystems";
  }
}
