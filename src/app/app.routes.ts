import { Routes } from '@angular/router'
import { BasketContainer } from './containers/basket/basket.container'
import { ToysContainer } from './containers/toys/toys.container'
import { ToysResolver } from './services/toys/toys.resolver'

import { AuthGuard } from './services/auth/auth.guard'

export const appRoutes: Routes = [
  {
    path: 'toys',
    component: ToysContainer,
    resolve: {
      toys: ToysResolver
    }
  },
  {
    path: 'basket',
    component: BasketContainer,
    canActivate: [ AuthGuard ]
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
