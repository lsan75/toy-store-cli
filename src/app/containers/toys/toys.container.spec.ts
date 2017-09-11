/*
 * Testing ToysContainer
 */

import { TestBed, async, ComponentFixture, inject } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core'

import { NgRedux } from '@angular-redux/store'
import { AppReduxTestingModule } from '../../testing/app-redux-testing.module'

import { IAppState } from '../../store'

import { ToysContainer } from './toys.container'
import { TOYS, ToysActions } from '../../store/toys/toys.actions'
import { IToy } from '../../services/toys/toy'

describe('ToysContainer', () => {
  let fixture: ComponentFixture<ToysContainer>
  let comp: ToysContainer
  let _ngRedux

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ AppReduxTestingModule ],
      declarations: [
        ToysContainer
      ],
      providers: [
        ToysActions
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
    const toys: IToy[] = [
      { selected: true, icon: null, title: null, price: 0 },
      { selected: false, icon: null, title: null, price: 0 },
      { selected: true, icon: null, title: null, price: 0 }
    ]
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
