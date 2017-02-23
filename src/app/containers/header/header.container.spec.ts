/*
 * Testing HeaderContainer
 */

import { TestBed, async, ComponentFixture, inject } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { DebugElement, NgZone, NO_ERRORS_SCHEMA } from '@angular/core'
import { Router, RouterModule } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'

import { NgRedux } from '@angular-redux/store'
import { IAppState, rootReducer } from '../../store'

import { HeaderContainer } from './header.container'
import { TOYS } from '../../store/toys/toys.actions'
import { AuthActions } from '../../store/auth/auth.actions'

describe('HeaderContainer', () => {
  let fixture: ComponentFixture<HeaderContainer>
  let comp: HeaderContainer
  let _ngRedux
  const zone: NgZone = new NgZone({enableLongStackTrace: false})
  const reduxFactory = () => {
    const ngRedux: NgRedux<IAppState> = new NgRedux<IAppState>(zone)
    ngRedux.configureStore(rootReducer, undefined)
    return ngRedux
  }

  const spyAuth = jasmine.createSpyObj('spyAuth', ['open'])

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        HeaderContainer
      ],
      providers: [
        { provide: NgRedux, useFactory: reduxFactory},
        { provide: AuthActions, useValue: spyAuth }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
  })

  beforeEach(inject([NgRedux],
  (ngRedux: NgRedux<IAppState>) => {
    fixture = TestBed.createComponent(HeaderContainer)
    comp = fixture.componentInstance
    _ngRedux = ngRedux
  }))

  it('should get counter', () => {
    const toys = [{selected: true}, {selected: false}, {selected: true}]
    _ngRedux.dispatch({
      type: TOYS.GET_TOYS,
      toys
    })
    fixture.detectChanges()

    comp.counter.subscribe(res => {
      expect(res).toEqual(2)
    })

  })

  it('should open auth', () => {
    fixture.detectChanges()
    comp.auth()
    expect(spyAuth.open).toHaveBeenCalled()
  })

  it('should navigate if connected', inject([Router], (router: Router) => {
    spyOn(router, 'navigateByUrl')
    comp.isConnected = true
    comp.auth()
    fixture.detectChanges()
    expect(router.navigateByUrl).toHaveBeenCalledWith('/basket')
  }))
})
