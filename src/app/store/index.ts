import { IToy } from '../services/toys/toy'
import { AuthActions } from './auth/auth.actions'
import { ToysActions } from './toys/toys.actions'
import { defaultAuthReducerState } from './auth/auth.reducer'

export interface IAuth {
  connected: boolean
  opened: boolean
}

export interface IAppState {
  authReducer: IAuth
  toysReducer: IToy[]
}

export const defaultState: IAppState = {
  authReducer: defaultAuthReducerState,
  toysReducer: []
}

export * from './root.reducer'

export const actions = [
  AuthActions,
  ToysActions
]
