import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../models/vehicle';
import { VehicleService } from '../services/vehicle.service';
import { CommonModule } from '@angular/common';
import { VehicleComponent } from './vehicle/vehicle.component';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';

@Component({
  selector: 'app-garage-app',
  standalone: true,
  imports: [CommonModule, VehicleComponent, VehicleFormComponent],
  templateUrl: './garage-app.component.html',
})
export class GarageAppComponent implements OnInit {
  title: string = 'Listado de Vehiculos';

  vehicles: Vehicle[] = [];

  constructor(private vehicleService: VehicleService) {}

  ngOnInit(): void {
    this.vehicleService
      .findAll()
      .subscribe((vehicle) => (this.vehicles = vehicle));
  }

  addVehicle(vehicle: Vehicle) {
    this.vehicles = [...this.vehicles, { ...vehicle, id: new Date().getTime() }];
  }
}
