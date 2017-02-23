import { Injectable } from '@angular/core'
import { NgRedux } from '@angular-redux/store'
import { Router } from '@angular/router'
import { Observable } from 'rxjs/Rx'
import { IAppState } from '../../store'
import { AuthService } from '../../services/auth/auth.service'
import { IUser } from '../../services/auth/user'

export const AUTH = {
  CONNECT: 'AUTH_CONNECT',
  OPEN: 'AUTH_OPEN',
  CLOSE: 'AUTH_CLOSE'
}

@Injectable()
export class AuthActions {

  constructor(
    private router: Router,
    private store: NgRedux<IAppState>,
    private authService: AuthService
  ) {}

  open = () => {
    this.store.dispatch({
      type: AUTH.OPEN
    })
  }

  close = () => {
    this.store.dispatch({
      type: AUTH.CLOSE
    })
  }

  connect = (credentials: IUser) => {
    return this.authService.getUser().subscribe((user: IUser) => {

      if (
        user.user === credentials.user &&
        user.pass === credentials.pass
      ) {
        this.store.dispatch({
          type: AUTH.CONNECT
        })
        this.close()
        this.router.navigateByUrl('/basket')
      }
    })
  }

}
