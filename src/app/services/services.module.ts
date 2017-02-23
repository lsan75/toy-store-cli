import { NgModule } from '@angular/core'

import { AuthGuard } from './auth/auth.guard'
import { AuthService } from './auth/auth.service'
import { ToysService } from './toys/toys.service'
import { ToysResolver } from './toys/toys.resolver'

@NgModule({
  providers: [
    AuthGuard,
    AuthService,
    ToysService,
    ToysResolver
  ]
})
export class ServicesModule {}
