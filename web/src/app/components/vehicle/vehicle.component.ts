import { CommonModule } from '@angular/common';
import { Component, EventEmitter } from '@angular/core';
import { Vehicle } from '../../models/vehicle';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-garage',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './vehicle.component.html',
})
export class VehicleComponent {
  title: string = 'Listado de Vehiculos';

  vehicles: Vehicle[] = [];

  idVehicleEventEmitter = new EventEmitter();

  selectedVehicleEventEmitter = new EventEmitter();

  constructor(private router: Router) {
    this.vehicles = this.router.getCurrentNavigation()?.extras.state!['vehicles'];
  }

  onRemoveVehicle(id: number): void {
    this.idVehicleEventEmitter.emit(id);
  }

  onSelectedVehicle(vehicle: Vehicle): void {
    this.selectedVehicleEventEmitter.emit(vehicle);
  }
}
