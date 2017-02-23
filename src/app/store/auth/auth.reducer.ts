import { Action } from 'redux'
import { IAuth } from '../'
import { AUTH } from './auth.actions'

export const defaultAuthReducerState =  {
  connected: false,
  opened: false
}

export function authReducer(
  state: IAuth = defaultAuthReducerState,
  action: Action
) {

  switch (action.type) {

    case AUTH.OPEN:
      return Object.assign({}, state, { opened: true })

    case AUTH.CLOSE:
      return Object.assign({}, state, { opened: false })

    case AUTH.CONNECTED:
      return Object.assign({}, state, {connected: true})

    default:
      return state
  }
}
