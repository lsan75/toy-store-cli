import { Injectable } from '@angular/core'
import { NgRedux } from '@angular-redux/store'
import { IAppState } from '../../store'

export const TOYS = {
  GET_TOYS: 'GET_TOYS',
  SELECT_TOY: 'SELECT_TOY'
}

@Injectable()
export class ToysActions {

  constructor(
    private store: NgRedux<IAppState>
  ) {}

  addToys(toys) {
    this.store.dispatch({
      type: TOYS.GET_TOYS,
      toys
    })
  }

  selectToy(toy) {
    this.store.dispatch({
      type: TOYS.SELECT_TOY,
      toy
    })
  }
}
