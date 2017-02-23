/*
 * Testing AuthGuard
 */

import { TestBed, async, fakeAsync, inject } from '@angular/core/testing'
import { NgZone } from '@angular/core'
import { NgRedux } from '@angular-redux/store'
import { IAppState, rootReducer } from '../../store'
import { AuthGuard } from './auth.guard'

describe('AuthGuard', () => {

  let guard

  let redux
  const zone: NgZone = new NgZone({enableLongStackTrace: false})
  const reduxFactory = () => {
    const ngRedux: NgRedux<IAppState> = new NgRedux<IAppState>(zone)
    ngRedux.configureStore(rootReducer, undefined)
    return ngRedux
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: NgRedux, useFactory: reduxFactory}
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
