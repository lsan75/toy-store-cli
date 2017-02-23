/*
 * Testing AuthActions
 */

import { TestBed, async, inject } from '@angular/core/testing'
import { AuthActions } from './auth.actions'
import { AuthService } from '../../services/auth/auth.service'
import { NgRedux } from '@angular-redux/store'
import { Observable } from 'rxjs/Rx'
import { Router, RouterModule } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'

describe('AuthActions', () => {

  let authActions
  const spyRedux = jasmine.createSpyObj('spyRedux', ['dispatch'])
  const spyAuth = jasmine.createSpyObj('spyAuth', ['getUser'])
  spyAuth.getUser.and.callFake(() => {
    return Observable.of({user: 'too', pass: '123'})
  })
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      providers: [
        AuthActions,
        { provide: NgRedux, useValue: spyRedux },
        { provide: AuthService, useValue: spyAuth }
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

  it('should not connect', () => {
    authActions.connect({user: 'tada', pass: '123'})
    expect(spyRedux.dispatch).not.toHaveBeenCalledWith({
      type: 'AUTH_CONNECT'
    })
  })

  it('should connect', () => {
    authActions.connect({user: 'too', pass: '123'})
    expect(spyAuth.getUser).toHaveBeenCalled()
    expect(spyRedux.dispatch).toHaveBeenCalledWith({
      type: 'AUTH_CONNECT'
    })
  })

})
