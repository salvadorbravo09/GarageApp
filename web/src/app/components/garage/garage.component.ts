import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Vehicle } from '../../models/vehicle';

@Component({
  selector: 'app-garage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './garage.component.html',
})
export class GarageComponent {
  @Input()
  vehicles: Vehicle[] = [];
}
