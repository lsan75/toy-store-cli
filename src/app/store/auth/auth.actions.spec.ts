/*
 * Testing AuthActions
 */

import { TestBed, async, inject } from '@angular/core/testing'
import { AuthActions } from './auth.actions'
import { NgRedux } from '@angular-redux/store'

describe('AuthActions', () => {

  let authActions
  const spyRedux = jasmine.createSpyObj('spyRedux', ['dispatch'])
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthActions,
        { provide: NgRedux, useValue: spyRedux }
      ]
    })
  })
  beforeEach(inject([AuthActions], (s: AuthActions) => {
    authActions = s
  }))

  it('should open', () => {
    authActions.open()
    expect(spyRedux.dispatch).toHaveBeenCalledWith({
      type: 'AUTH_OPEN'
    })
  })

  it('should close', () => {
    authActions.close()
    expect(spyRedux.dispatch).toHaveBeenCalledWith({
      type: 'AUTH_CLOSE'
    })
  })

  it('should connect', () => {
    authActions.connected()
    expect(spyRedux.dispatch).toHaveBeenCalledWith({
      type: 'AUTH_CONNECTED'
    })
  })
})
