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
  title: string = 'Listado de Vehiculos';

  @Input()
  vehicles: Vehicle[] = [];

  @Output()
  idVehicleEventEmitter = new EventEmitter();

  @Output()
  selectedVehicleEventEmitter = new EventEmitter();

  onRemoveVehicle(id: number): void {
    this.idVehicleEventEmitter.emit(id);
  }

  onSelectedVehicle(vehicle: Vehicle): void {
    this.selectedVehicleEventEmitter.emit(vehicle);
  }
}
