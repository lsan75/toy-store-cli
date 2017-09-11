/*
 * Testing AuthContainer
 */

import { TestBed, async, ComponentFixture, inject } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { DebugElement, NgZone, NO_ERRORS_SCHEMA } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { NgRedux } from '@angular-redux/store'
import { AppReduxTestingModule } from '../../testing/app-redux-testing.module'

import { IAppState } from '../../store'

import { AuthContainer } from './auth.container'
import { AuthActions } from '../../store/auth/auth.actions'

describe('AuthContainer', () => {
  let fixture: ComponentFixture<AuthContainer>
  let comp: AuthContainer
  let _ngRedux

  const spyAuth = jasmine.createSpyObj('spyAuth', ['close', 'connect'])
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, AppReduxTestingModule],
      declarations: [
        AuthContainer
      ],
      providers: [
        { provide: AuthActions, useValue: spyAuth }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
  })

  beforeEach(inject([NgRedux],
  (ngRedux: NgRedux<IAppState>) => {
    fixture = TestBed.createComponent(AuthContainer)
    comp = fixture.componentInstance
    _ngRedux = ngRedux
  }))

  it('should be opened', () => {
    _ngRedux.dispatch({
      type: 'AUTH_OPEN'
    })
    fixture.detectChanges()
    comp.opened.subscribe(res => {
      expect(res).toBe(true)
    })
  })

  it('should close', () => {
    comp.close()
    fixture.detectChanges()
    expect(spyAuth.close).toHaveBeenCalled()
  })

  it('should connect', () => {
    const theUser = {user: 'toto', pass: '123'}
    comp.auth = theUser
    comp.connect()
    fixture.detectChanges()
    expect(spyAuth.connect).toHaveBeenCalledWith(theUser)
  })
})
