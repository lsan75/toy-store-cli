import { Component, OnInit, OnDestroy } from '@angular/core'
import { select } from '@angular-redux/store'
import { Observable } from 'rxjs/Rx'
import { ToysActions } from '../../store/toys/toys.actions'
import { IToy } from '../../services/toys/toy'

@Component({
  selector: 'app-basket',
  templateUrl: './basket.html'
})
export class BasketContainer implements OnInit, OnDestroy {

  public price = 0
  private sub

  @select(state => state.toysReducer.filter(toy => toy.selected))
  toys: Observable<IToy[]>

  constructor(
    private toysActions: ToysActions
  ) {}

  ngOnInit() {
    this.sub = this.toys.subscribe(res => {
      this.price = res.reduce((acc, item) => {
        return acc + item.price
      }, 0)
    })
  }

  ngOnDestroy() {
    if (this.sub) { this.sub.unsubscribe() }
  }

  public delete = toy => {
    this.toysActions.selectToy(toy)
  }
}
