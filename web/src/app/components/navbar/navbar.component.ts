import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Vehicle } from '../../models/vehicle';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  @Input()
  vehicles: Vehicle[] = [];
}
