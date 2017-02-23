import { Injectable } from '@angular/core'
import { CanActivate } from '@angular/router'
import { Observable } from 'rxjs/Rx'
import { select } from '@angular-redux/store'

@Injectable()
export class AuthGuard implements CanActivate {

  @select(state => state.authReducer.connected) connected: Observable<boolean>

  canActivate() {
    return this.connected
  }
}
