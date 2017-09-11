import { Component, OnInit, OnDestroy } from '@angular/core'
import { Observable } from 'rxjs/Rx'
import { select } from '@angular-redux/store'
import { IToy } from '../../services/toys/toy'
import { ToysActions } from '../../store/toys/toys.actions'

import * as toysQueries from '../../store/toys/toys.queries'

@Component({
  selector: 'app-toys-container',
  templateUrl: './toys.html'
})
export class ToysContainer {

  @select(toysQueries.getToys) toys: Observable<IToy[]>

  constructor(private toysActions: ToysActions) {}

  onSelect = toy => {
    this.toysActions.selectToy(toy)
  }
}
