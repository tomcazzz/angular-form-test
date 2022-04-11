import { Component, VERSION } from '@angular/core';
import { BookFormComponent } from './book-form/book-form.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
}
