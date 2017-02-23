import { Injectable } from '@angular/core'
import { NgRedux } from '@angular-redux/store'
import { IAppState } from '../../store'

export const AUTH = {
  CONNECTED: 'AUTH_CONNECTED',
  OPEN: 'AUTH_OPEN',
  CLOSE: 'AUTH_CLOSE'
}

@Injectable()
export class AuthActions {

  constructor(
    private store: NgRedux<IAppState>
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

  connected = () => {
    this.store.dispatch({
      type: AUTH.CONNECTED
    })
  }
}
