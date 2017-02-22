import { IToy } from '../services/toys/toy'
import { ToysActions } from './toys/toys.actions'

export interface IAppState {
  toysReducer: IToy[]
}

export const defaultState: IAppState = {
  toysReducer: []
}

export * from './root.reducer'

export const actions = [
  ToysActions
]
