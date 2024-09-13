import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StyleBindingComponent } from './style-binding/style-binding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StyleBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'applyingEverything';
}
