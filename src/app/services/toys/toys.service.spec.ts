/*
 * Testing ToysService
 */

import { TestBed, async, fakeAsync, inject } from '@angular/core/testing'
import {
  Http, BaseRequestOptions,
  RequestMethod, ConnectionBackend, Response, ResponseOptions
} from '@angular/http'
import { MockBackend, MockConnection } from '@angular/http/testing'
import { ToysService } from './toys.service'
import { ToysActions } from '../../store/toys/toys.actions'

describe('ToysService', () => {

  const toysActions = jasmine.createSpyObj('actions', ['addToys'])
  let service
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ToysService,
        { provide: ToysActions, useValue: toysActions },
        BaseRequestOptions,
        MockBackend,
        ConnectionBackend,
        {
          provide: Http,
          useFactory: (backend, options) => new Http(backend, options),
          deps: [ MockBackend, BaseRequestOptions ]
        }
      ]
    })
  })

  beforeEach(inject([ToysService], (s: ToysService) => {
    service = s
  }))

  it('should get toys', inject(
  [ MockBackend ],
  ( backend: MockBackend) => {

    const options: ResponseOptions = new ResponseOptions({
      body: JSON.stringify({toy: 'hello'}),
      status: 200
    })
    const response = new Response(options)

    backend.connections.subscribe((connection: MockConnection) => {
      connection.mockRespond(response)
    })

    service.getToys().subscribe(res => {
      expect(res).toEqual({toy: 'hello'})
      expect(toysActions.addToys).toHaveBeenCalledWith({toy: 'hello'})

      service.getToys().subscribe(second => {
        expect(second).toEqual([])
      })
    })

  }))

})
