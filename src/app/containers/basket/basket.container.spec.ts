/*
 * Testing BasketContainer
 */

import {
  TestBed, async, ComponentFixture, inject, fakeAsync, tick
} from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core'

import { NgRedux } from '@angular-redux/store'
import { AppReduxTestingModule } from '../../testing/app-redux-testing.module'

import { IAppState } from '../../store'

import { BasketContainer } from './basket.container'
import { TOYS, ToysActions } from '../../store/toys/toys.actions'

describe('BasketContainer', () => {
  let fixture: ComponentFixture<BasketContainer>
  let comp: BasketContainer
  let _ngRedux

  const spyToysActions = jasmine.createSpyObj(
    'spyToysActions', ['addToys', 'selectToy']
  )

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ AppReduxTestingModule ],
      declarations: [
        BasketContainer
      ],
      providers: [
        {
          provide: ToysActions,
          useValue: spyToysActions
        }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
  })

  beforeEach(inject([ NgRedux ],
  (ngRedux: NgRedux<IAppState>) => {
    fixture = TestBed.createComponent(BasketContainer)
    comp = fixture.componentInstance
    _ngRedux = ngRedux
  }))

  it('should get toys', done => {
    fixture.detectChanges()

    const toys = [{selected: true}, {selected: false}, {selected: true}]
    _ngRedux.dispatch({
      type: TOYS.GET_TOYS,
      toys
    })

    comp.toys.subscribe(res => {
      expect(res.length).toBe(2)
      done()
    })
  })

  it('should delete a toy', () => {
    fixture.detectChanges()
    comp.delete('hello')
    expect(spyToysActions.selectToy).toHaveBeenCalledWith('hello')
  })

  it('should compute the price', () => {
    const toys = [
      { selected: true, price: 10 },
      { selected: false },
      { selected: true, price: 20 }
    ]
    _ngRedux.dispatch({
      type: TOYS.GET_TOYS,
      toys
    })

    fixture.detectChanges()

    comp.price.subscribe(res => {
      expect(res).toBe(30)
    })

  })
})
