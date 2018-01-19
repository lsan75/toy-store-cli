/*
 * Testing AuthService
 */

import { TestBed, async, fakeAsync, inject } from '@angular/core/testing'
import {
  HttpClientTestingModule, HttpTestingController
} from '@angular/common/http/testing'
import { AuthService } from './auth.service'
import { HttpClient } from '@angular/common/http'

describe('AuthService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        AuthService
      ]
    })
  })

  afterEach(inject(
  [HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify()
  }))

  it('should get toys', inject(
    [AuthService, HttpClient, HttpTestingController], (s, http, httpMock) => {

    s.getUser().subscribe(res => {
      expect(res.body).toEqual({user: 'hello'})
    })

    const req = httpMock.expectOne('api/auth.json')
    expect(req.request.method).toEqual('GET')
    req.flush({user: 'hello'})
  }))

})
