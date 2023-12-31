import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit {
  
  public inputText : string = "";
  @Output() public sendData = new EventEmitter<string>();
  public SendEvent()
  {
    this.sendData.emit(this.inputText);
  }
  constructor(){}
  ngOnInit(){}

}
