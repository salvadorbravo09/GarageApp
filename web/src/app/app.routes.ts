import { Routes } from '@angular/router';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { VehicleFormComponent } from './components/vehicle-form/vehicle-form.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/vehicles',
  },
  {
    path: 'vehicles',
    component: VehicleComponent,
  },
  {
    path: 'vehicles/create',
    component: VehicleFormComponent,
  },
  {
    path: 'vehicles/edit/:id',
    component: VehicleFormComponent,
  },
];
