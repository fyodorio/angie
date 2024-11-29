import { Routes } from '@angular/router';

import { AngieComponent } from './pages/angie.component';
import { LandingComponent } from './pages/landing.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'app',
    component: AngieComponent
  }
];
