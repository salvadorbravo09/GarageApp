import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../models/vehicle';
import { VehicleService } from '../services/vehicle.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-garage-app',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent],
  templateUrl: './garage-app.component.html',
  styleUrls: ['./garage-app.component.css'],
})
export class GarageAppComponent implements OnInit {
  vehicles: Vehicle[] = [];

  vehicleSelected: Vehicle;

  constructor(private vehicleService: VehicleService) {
    this.vehicleSelected = new Vehicle();
  }

  ngOnInit(): void {
    this.vehicleService
      .findAll()
      .subscribe((vehicle) => (this.vehicles = vehicle));
  }

  addVehicle(vehicle: Vehicle) {
    if (vehicle.id > 0) {
      this.vehicles = this.vehicles.map((vehc) => {
        if (vehc.id == vehicle.id) {
          return { ...vehicle };
        }
        return vehc;
      });
    } else {
      this.vehicles = [
        ...this.vehicles,
        { ...vehicle, id: new Date().getTime() },
      ];
    }
    Swal.fire({
      title: 'Guardado!',
      text: 'El vehiculo ha sido guardado con exito!',
      icon: 'success',
    });

    this.vehicleSelected = new Vehicle(); // Reiniciamos
  }

  removeUser(id: number): void {
    Swal.fire({
      title: 'Seguro que quiere eliminar?',
      text: 'No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.vehicles = this.vehicles.filter((vehicle) => vehicle.id != id);
        Swal.fire({
          title: 'Eliminado!',
          text: 'El vehiculo ha sido eliminado con exito.',
          icon: 'success',
        });
      }
    });
  }

  setSelectedVehicle(vehicleRow: Vehicle): void {
    this.vehicleSelected = { ...vehicleRow };
  }
}
