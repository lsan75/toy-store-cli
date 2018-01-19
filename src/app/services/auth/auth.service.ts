import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { IUser } from './user'

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient
  ) {}

  public getUser = () => {

    return this.http.get<IUser>('api/auth.json', {observe: 'response'})

  }
}
