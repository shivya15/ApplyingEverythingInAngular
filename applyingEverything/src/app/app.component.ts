import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { FormComponent } from "./form/form.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StyleBindingComponent, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'applyingEverything';
}
