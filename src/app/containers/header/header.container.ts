import { Component } from '@angular/core'
import { select } from '@angular-redux/store'
import { Observable } from 'rxjs/Rx'
import { AuthActions } from '../../store/auth/auth.actions'

@Component({
  selector: 'app-header-container',
  templateUrl: './header.html'
})
export class HeaderContainer {

  @select(state => state.toysReducer.filter(toy => toy.selected).length)
  counter: Observable<number>

  constructor(private authActions: AuthActions) {}

  public auth = () => {
    this.authActions.open()
  }
}
