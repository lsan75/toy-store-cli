import { Component, Input } from '@angular/core'
import { select } from '@angular-redux/store'
import { Observable } from 'rxjs/Rx'

import { AuthActions } from '../../store/auth/auth.actions'
import * as authQueries from '../../store/auth/auth.queries'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.html'
})
export class AuthContainer {

  public auth = {
    user: null,
    pass: null
  }

  @select(authQueries.opened) opened: Observable<boolean>

  constructor(
    private authActions: AuthActions
  ) {}

  public close = () => {
    this.authActions.close()
  }

  public connect = () => {
    this.authActions.connect(this.auth)
  }
}
