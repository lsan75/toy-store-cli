import { Injectable } from '@angular/core'
import { NgRedux } from '@angular-redux/store'
import { Router } from '@angular/router'
import { Observable } from 'rxjs/Rx'
import { IAppState } from '../../store'
import { AuthService } from '../../services/auth/auth.service'
import { IUser } from '../../services/auth/user'
import { HttpResponse, HttpErrorResponse } from '@angular/common/http'

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
    return this.authService.getUser().subscribe(
      (user: HttpResponse<IUser>) => {

        if (
          user.body.user === credentials.user &&
          user.body.pass === credentials.pass
        ) {
          this.store.dispatch({
            type: AUTH.CONNECT
          })
          this.close()
          this.router.navigateByUrl('/basket')
        }
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log(err)
        } else {
          console.log( `${err.status} : ${err.statusText}` )
        }
      }
    )
  }

}
