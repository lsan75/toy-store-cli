import { Action, combineReducers } from 'redux'
import { IAppState } from './'

import { toysReducer } from './toys/toys.reducer'
import { authReducer } from './auth/auth.reducer'

export const rootReducer = combineReducers<IAppState>({
  authReducer,
  toysReducer
})
