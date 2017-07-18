import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoverFormComponent } from './rover-form/rover-form.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { UserPhotoListComponent } from './user-photo-list/user-photo-list.component';

const appRoutes: Routes = [
  {
    path: '',
    component: RoverFormComponent
  },
  {
    path: 'photos',
    component: PhotoListComponent
  },
  {
    path: 'user/photos',
    component: UserPhotoListComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
