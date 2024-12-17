import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../models/vehicle';
import { VehicleService } from '../services/vehicle.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-garage-app',
  standalone: true,
  imports: [CommonModule],
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
}
