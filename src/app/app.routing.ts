import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoverFormComponent } from './rover-form/rover-form.component';
import { PhotoListComponent } from './photo-list/photo-list.component';

const appRoutes: Routes = [
  {
    path: '',
    component: RoverFormComponent
  },
  {
    path: 'photos',
    component: PhotoListComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
