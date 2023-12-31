import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input() public receiveMessage : any;

  public childMessage : string = "Hello Parent! from child"
  @Output() public sender =new EventEmitter();
  public sendMessage()
  {
    this.sender.emit(this.childMessage);
  }
}
