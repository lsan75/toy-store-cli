/*
 * Testing ToysActions
 */

import { TestBed, async, inject } from '@angular/core/testing'
import { ToysActions } from './toys.actions'
import { NgRedux } from '@angular-redux/store'

describe('ToysActions', () => {

  let toyActions
  const spyRedux = jasmine.createSpyObj('spyRedux', ['dispatch'])
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ToysActions,
        { provide: NgRedux, useValue: spyRedux }
      ]
    })
  })
  beforeEach(inject([ToysActions], (s: ToysActions) => {
    toyActions = s
  }))

  it('should addToys', () => {
    toyActions.addToys('pan')

    expect(spyRedux.dispatch).toHaveBeenCalledWith({
      type: 'GET_TOYS',
      toys: 'pan'
    })
  })

  it('should selectToy', () => {
    toyActions.selectToy('titi')

    expect(spyRedux.dispatch).toHaveBeenCalledWith({
      type: 'SELECT_TOY',
      toy: 'titi'
    })
  })
})
