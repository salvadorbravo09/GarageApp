import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Vehicle } from '../../models/vehicle';

@Component({
  selector: 'app-vehicle-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './vehicle-form.component.html',
})
export class VehicleFormComponent {
  vehicle: Vehicle;

  @Output()
  newVehicleEventEmitter: EventEmitter<Vehicle> = new EventEmitter();

  constructor() {
    this.vehicle = new Vehicle();
  }

  onSubmit(): void {
    this.newVehicleEventEmitter.emit(this.vehicle);
    console.log(this.vehicle);
  }
}
