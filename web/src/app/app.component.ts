import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { GarageAppComponent } from './components/garage-app.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GarageAppComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'web';
}
