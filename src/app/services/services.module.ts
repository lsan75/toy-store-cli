import { NgModule } from '@angular/core'

import { ToysService } from './toys/toys.service'
import { ToysResolver } from './toys/toys.resolver'

@NgModule({
  providers: [
    ToysService,
    ToysResolver
  ]
})
export class ServicesModule {}
