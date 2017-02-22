import { Routes } from '@angular/router'
import { ToysContainer } from './containers/toys/toys.container'
import { ToysResolver } from './services/toys/toys.resolver'

export const appRoutes: Routes = [
  {
    path: 'toys',
    component: ToysContainer,
    resolve: {
      toys: ToysResolver
    }
  },
  {
    path: '',
    redirectTo: '/toys',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/toys',
    pathMatch: 'full'
  }
]
