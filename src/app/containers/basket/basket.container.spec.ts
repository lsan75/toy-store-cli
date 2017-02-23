/*
 * Testing BasketContainer
 */

import { TestBed, async, ComponentFixture, inject } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { DebugElement, NgZone, NO_ERRORS_SCHEMA } from '@angular/core'

import { NgRedux } from '@angular-redux/store'
import { IAppState, rootReducer } from '../../store'

import { BasketContainer } from './basket.container'
import { TOYS, ToysActions } from '../../store/toys/toys.actions'

describe('BasketContainer', () => {
  let fixture: ComponentFixture<BasketContainer>
  let comp: BasketContainer
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
        BasketContainer
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
    fixture = TestBed.createComponent(BasketContainer)
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
      expect(res.length).toBe(2)
    })
  })

  it('should delete a toy', inject([ToysActions],
  (toysActions: ToysActions) => {
    spyOn(toysActions, 'selectToy')
    comp.delete('hello')
    fixture.detectChanges()

    expect(toysActions.selectToy).toHaveBeenCalledWith('hello')
  }))

  it('should compute the price', () => {
    const toys = [
      {selected: true, price: 10},
      {selected: false},
      {selected: true, price: 20}
    ]
    _ngRedux.dispatch({
      type: TOYS.GET_TOYS,
      toys
    })
    comp.ngOnInit()
    fixture.detectChanges()

    expect(comp.price).toBe(30)

  })
})
