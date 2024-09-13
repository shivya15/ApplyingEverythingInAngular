import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-style-binding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './style-binding.component.html',
  styleUrl: './style-binding.component.css',
})
export class StyleBindingComponent {
  title="Style Binding"
  color="Red"
  users=[{name:"shivya", company:"S&P"},{name:"anansha",company:"HoneyWell"}]
  updateColor(){
    this.color="green"
  }
}
