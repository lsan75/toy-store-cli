/*
 * Testing ToysContainer
 */

import { TestBed, async, ComponentFixture, inject } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { DebugElement, NgZone, NO_ERRORS_SCHEMA } from '@angular/core'

import { NgRedux } from '@angular-redux/store'
import { IAppState, rootReducer } from '../../store'

import { ToysContainer } from './toys.container'
import { TOYS, ToysActions } from '../../store/toys/toys.actions'

describe('ToysContainer', () => {
  let fixture: ComponentFixture<ToysContainer>
  let comp: ToysContainer
  let _ngRedux
  const zone: NgZone = new NgZone({enableLongStackTrace: false})
  const reduxFactory = () => {
    const ngRedux: NgRedux<IAppState> = new NgRedux<IAppState>(zone)
    ngRedux.configureStore(rootReducer, undefined)
    return ngRedux
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ToysContainer
      ],
      providers: [
        ToysActions,
        { provide: NgRedux, useFactory: reduxFactory}
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
  })

  beforeEach(inject([NgRedux],
  (ngRedux: NgRedux<IAppState>) => {
    fixture = TestBed.createComponent(ToysContainer)
    comp = fixture.componentInstance
    _ngRedux = ngRedux
  }))

  it('should get toys', () => {
    const toys = [{selected: true}, {selected: false}, {selected: true}]
    _ngRedux.dispatch({
      type: TOYS.GET_TOYS,
      toys
    })
    fixture.detectChanges()

    comp.toys.subscribe(res => {
      expect(res).toEqual(toys)
    })
  })

  it('should select a toy', inject([ToysActions],
  (toysActions: ToysActions) => {
    spyOn(toysActions, 'selectToy')
    comp.onSelect('hello')
    fixture.detectChanges()

    expect(toysActions.selectToy).toHaveBeenCalledWith('hello')
  }))
})
