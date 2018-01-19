/*
 * Testing ToysService
 */

import { TestBed, async, fakeAsync, inject } from '@angular/core/testing'
import {
  HttpClientTestingModule, HttpTestingController
} from '@angular/common/http/testing'
import { HttpClient } from '@angular/common/http'
import { ToysService } from './toys.service'
import { ToysActions } from '../../store/toys/toys.actions'

describe('ToysService', () => {

  const toysActions = jasmine.createSpyObj('actions', ['addToys'])
  let service
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        ToysService,
        { provide: ToysActions, useValue: toysActions }
      ]
    })
  })

  beforeEach(inject([ToysService], (s: ToysService) => {
    service = s
  }))

  afterEach(inject(
  [HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify()
  }))

  it('should get toys', inject(
  [ HttpClient, HttpTestingController ],
  ( http, httpMock ) => {

    service.getToys().subscribe(res => {
      expect(res).toEqual({toy: 'hello'})
      expect(toysActions.addToys).toHaveBeenCalledWith({toy: 'hello'})

      service.getToys().subscribe(second => {
        expect(second).toEqual([])
      })
    })

    const req = httpMock.expectOne('api/toys.json')
    expect(req.request.method).toEqual('GET')
    req.flush({toy: 'hello'})

  }))

})
