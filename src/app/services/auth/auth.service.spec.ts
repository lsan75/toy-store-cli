/*
 * Testing AuthService
 */

import { TestBed, async, fakeAsync, inject } from '@angular/core/testing'
import {
  Http, BaseRequestOptions,
  RequestMethod, ConnectionBackend, Response, ResponseOptions
} from '@angular/http'
import { MockBackend, MockConnection } from '@angular/http/testing'
import { AuthService } from './auth.service'

describe('AuthService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService,
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

  it('should get toys', inject(
  [ MockBackend, AuthService ],
  ( backend: MockBackend, s: AuthService ) => {

    const options: ResponseOptions = new ResponseOptions({
      body: JSON.stringify({user: 'hello'}),
      status: 200
    })
    const response = new Response(options)

    backend.connections.subscribe((connection: MockConnection) => {
      connection.mockRespond(response)
    })

    s.getUser().subscribe(res => {
      expect(res).toEqual({user: 'hello'})
    })

  }))

})
