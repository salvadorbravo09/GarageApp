import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Vehicle } from '../../models/vehicle';

@Component({
  selector: 'app-garage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vehicle.component.html',
})
export class VehicleComponent {
  @Input()
  vehicles: Vehicle[] = [];
}
