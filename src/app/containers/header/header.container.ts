import { Component } from '@angular/core'
import { select } from '@angular-redux/store'
import { Observable } from 'rxjs/Rx'

@Component({
  selector: 'app-header-container',
  templateUrl: './header.html'
})
export class HeaderContainer {

  @select(state => state.toysReducer.filter(toy => toy.selected).length)
  counter: Observable<number>

}
