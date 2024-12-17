import { Injectable } from '@angular/core';
import { Vehicle } from '../models/vehicle';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  private vehicles: Vehicle[] = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Corolla',
      year: 2010,
      color: 'Gris',
      transmision: 'Manual',
    },
    {
      id: 2,
      brand: 'Fiat',
      model: 'Palio',
      year: 2004,
      color: 'Negro',
      transmision: 'Manual',
    },
  ];

  constructor() {}

  findAll(): Observable<Vehicle[]> {
    return of(this.vehicles);
  }
}
