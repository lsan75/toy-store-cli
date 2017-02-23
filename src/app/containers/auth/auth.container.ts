import { Component, Input } from '@angular/core'
import { select } from '@angular-redux/store'
import { Observable } from 'rxjs/Rx'

import { AuthActions } from '../../store/auth/auth.actions'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.html'
})
export class AuthContainer {

  public auth = {
    user: null,
    pass: null
  }

  @select(state => state.authReducer.opened)
  opened: Observable<boolean>

  constructor(private authActions: AuthActions) {}

  public close = () => {
    this.authActions.close()
  }

  public connect = () => {

  }
}
