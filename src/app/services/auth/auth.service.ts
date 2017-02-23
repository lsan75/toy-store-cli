import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

@Injectable()
export class AuthService {

  constructor(
    private http: Http
  ) {}

  public connect = () => {

    return this.http.get('/src/api/auth.json')
      .map(res => res.json())

  }
}
