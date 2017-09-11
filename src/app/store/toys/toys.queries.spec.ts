import { IAppState } from '../'
import * as toysQueries from './toys.queries'

describe('toysQueries', () => {
  const state = {
    authReducer: null,
    toysReducer: [
      {
        title: 'title a',
        icon: 'icon a',
        price: 10,
        selected: true
      },
      {
        title: 'title b',
        icon: 'icon b',
        price: 20,
        selected: false
      },
      {
        title: 'title c',
        icon: 'icon c',
        price: 30,
        selected: true
      }
    ]
  }

  it('should get toys', () => {
    expect(toysQueries.getToys(state)).toEqual(state.toysReducer)
  })

  it('should get selected toys', () => {
    expect(toysQueries.getSelectedToys(state)).toEqual([
      {
        title: 'title a',
        icon: 'icon a',
        price: 10,
        selected: true
      },
      {
        title: 'title c',
        icon: 'icon c',
        price: 30,
        selected: true
      }
    ])
  })

  it('should get toys count', () => {
    expect(toysQueries.getToysCount(state)).toBe(2)
  })

  it('should get total price', () => {
    expect(toysQueries.getTotalPrice(state)).toBe(40)
  })

})