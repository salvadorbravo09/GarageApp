import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Vehicle } from '../../models/vehicle';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vehicle-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vehicle-form.component.html',
})
export class VehicleFormComponent {
  @Input()
  vehicle: Vehicle;

  @Output()
  newVehicleEventEmitter: EventEmitter<Vehicle> = new EventEmitter();

  constructor() {
    this.vehicle = new Vehicle();
  }

  onSubmit(vehicleForm: NgForm): void {
    if (vehicleForm.valid) {
      this.newVehicleEventEmitter.emit(this.vehicle);
    }
    vehicleForm.reset();
    vehicleForm.resetForm();
  }

  onClear(vehicleForm: NgForm): void {
    vehicleForm.resetForm();
  }
}
