import { Injectable } from '@angular/core'
import { CanActivate } from '@angular/router'
import { Observable } from 'rxjs/Rx'
import { select } from '@angular-redux/store'

import * as authQueries from '../../store/auth/auth.queries'

@Injectable()
export class AuthGuard implements CanActivate {

  @select(authQueries.connected) connected: Observable<boolean>

  canActivate() {
    return this.connected
  }
}
