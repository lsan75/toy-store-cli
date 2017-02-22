import { Action, combineReducers } from 'redux'
import { IAppState } from './'

import { toysReducer } from './toys/toys.reducer'

export const rootReducer = combineReducers<IAppState>({
  toysReducer
})
