import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';

export const routes: Routes = [
  { path: '', redirectTo: 'master-view', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'master-view', loadChildren: () => import('./master-view/master-view.routes').then(m => m.routes), data: { text: 'Master View' } },
  { path: 'login-and-sign-up', loadChildren: () => import('./login-and-sign-up/login-and-sign-up.routes').then(m => m.routes), data: { text: 'Login and Sign Up' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
