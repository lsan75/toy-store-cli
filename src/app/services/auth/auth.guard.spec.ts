/*
 * Testing AuthGuard
 */

import { TestBed, async, fakeAsync, inject } from '@angular/core/testing'

import { NgRedux } from '@angular-redux/store'
import { AppReduxTestingModule } from '../../testing/app-redux-testing.module'

import { IAppState } from '../../store'
import { AuthGuard } from './auth.guard'

describe('AuthGuard', () => {

  let guard
  let redux

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ AppReduxTestingModule ],
      providers: [
        AuthGuard
      ]
    })
  })

  beforeEach(inject([AuthGuard, NgRedux],
  (_guard: AuthGuard, _redux: NgRedux<IAppState>) => {
    guard = _guard
    redux = _redux
  }))

  it('should not be connected', () => {
    guard.canActivate().subscribe(result => {
      expect(result).toBeFalsy()
    })
  })

  it('should be connected', () => {
    redux.dispatch({
      type: 'AUTH_CONNECT'
    })
    guard.canActivate().subscribe(result => {
      expect(result).toBe(true)
    })
  })
})
