import { Action } from 'redux'
import { IToy } from '../../services/toys/toy'
import { TOYS } from './toys.actions'

export function toysReducer(state: IToy[] = [], action: Action) {

  switch (action.type) {

    case TOYS.GET_TOYS:
      return [...action['toys']]

    case TOYS.SELECT_TOY:
      let newState: IToy[] = [...state]
      newState = newState.map(item => {
        item.selected = item.title === action['toy'].title ?
          !item.selected : item.selected
        return item
      })
      return newState

    default:
      return state
  }
}
