import { Component, OnInit, OnDestroy } from '@angular/core'
import { select } from '@angular-redux/store'
import { Observable } from 'rxjs/Rx'
import { ToysActions } from '../../store/toys/toys.actions'
import { IToy } from '../../services/toys/toy'

import * as toysQueries from '../../store/toys/toys.queries'

@Component({
  selector: 'app-basket',
  templateUrl: './basket.html'
})
export class BasketContainer {

  private sub

  @select(toysQueries.getSelectedToys) toys: Observable<IToy[]>
  @select(toysQueries.getTotalPrice) price: Observable<number>

  constructor(
    private toysActions: ToysActions
  ) {}

  public delete = toy => {
    this.toysActions.selectToy(toy)
  }
}
