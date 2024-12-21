import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  @Output()
  idVehicleEventEmitter = new EventEmitter();

  @Output()
  selectedVehicleEventEmitter = new EventEmitter();

  onRemoveVehicle(id: number): void {
    const confirmRemove = confirm('Esta seguro que desea eliminar?');
    if (confirmRemove) {
      this.idVehicleEventEmitter.emit(id);
    }
  }

  onSelectedVehicle(vehicle: Vehicle): void {
    this.selectedVehicleEventEmitter.emit(vehicle);
  }
}
