import { Routes } from '@angular/router'
import { authGuard } from './core'

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    canActivate: [authGuard],
    loadComponent: () => import('./core/pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./core/pages/login/login.component').then(m => m.LoginComponent)
  }
]
