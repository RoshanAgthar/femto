import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SampleComponent } from './sample/sample.component'
@Component({
  selector: 'app-root',
  imports: [ SampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
}
