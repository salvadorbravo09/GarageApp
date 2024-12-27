import { Injectable } from '@angular/core';
import { Vehicle } from '../models/vehicle';
import { map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  private vehicles: Vehicle[] = [];

  constructor(private http: HttpClient) {}

  findAll(): Observable<Vehicle[]> {
    return this.http
      .get('http://localhost:8080/api/vehicle/v1')
      .pipe(map((vehicles: any) => vehicles as Vehicle[]));
  }
}
