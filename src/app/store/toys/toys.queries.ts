import { IAppState } from '../'

export function getToys(state: IAppState) {
  return state.toysReducer
}

export function getSelectedToys(state: IAppState) {
  return state.toysReducer.filter(toy => toy.selected)
}

export function getToysCount(state: IAppState) {
  return state.toysReducer.filter(toy => toy.selected).length
}

export function getTotalPrice(state: IAppState) {
  return state.toysReducer
    .filter(toy => toy.selected)
    .reduce((acc, item) => {
      return acc + item.price
    }, 0)
}