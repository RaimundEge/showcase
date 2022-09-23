import { Component } from '@angular/core';
import { AllPages } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Web Development Showcase';
  allPages = AllPages;
}
