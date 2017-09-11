import { IAppState } from '../'

export function connected(state: IAppState) {
  return state.authReducer.connected
}

export function opened(state: IAppState) {
  return state.authReducer.opened
}
