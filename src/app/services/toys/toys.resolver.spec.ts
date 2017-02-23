/*
 * Testing ToysResolver
 */

import { TestBed, async, inject } from '@angular/core/testing'
import { ToysResolver } from './toys.resolver'
import { ToysService } from './toys.service'

describe('ToysResolver', () => {

  let toysResolver
  const spyService = jasmine.createSpyObj('spyService', ['getToys'])
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ToysResolver,
        { provide: ToysService, useValue: spyService }
      ]
    })
  })
  beforeEach(inject([ToysResolver], (s: ToysResolver) => {
    toysResolver = s
  }))

  it('shoudl resolve toys', () => {
    toysResolver.resolve()
    expect(spyService.getToys).toHaveBeenCalled()
  })
})
