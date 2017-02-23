import { Component, OnDestroy, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { select } from '@angular-redux/store'
import { Observable } from 'rxjs/Rx'
import { AuthActions } from '../../store/auth/auth.actions'

@Component({
  selector: 'app-header-container',
  templateUrl: './header.html'
})
export class HeaderContainer implements OnDestroy, OnInit {

  public isConnected = false

  @select(state => state.toysReducer.filter(toy => toy.selected).length)
  counter: Observable<number>

  @select(state => state.authReducer.connected) connected: Observable<boolean>

  private unsub

  constructor(
    private router: Router,
    private authActions: AuthActions
  ) {}

  ngOnInit() {
    this.unsub = this.connected.subscribe(res => {
      this.isConnected = res
    })
  }

  ngOnDestroy() {
    if (this.unsub) { this.unsub.unsubscribe() }
  }

  public auth = () => {
    if (this.isConnected) {
      this.router.navigateByUrl('/basket')
    } else {
      this.authActions.open()
    }
  }
}
