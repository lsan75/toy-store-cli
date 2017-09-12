import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

@Injectable()
export class AuthService {

  constructor(
    private http: Http
  ) {}

  public getUser = () => {

    return this.http.get('api/auth.json')
      .map(res => res.json())

  }
}
