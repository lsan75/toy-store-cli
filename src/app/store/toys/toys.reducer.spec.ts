/*
 * Testing toysReducer
 */

import { toysReducer } from './toys.reducer'
import { TOYS } from './toys.actions'

describe('toysReducer', () => {

  let result
  const mockToy = {
    title: 'hello',
    icon: 'pan',
    price: 1,
    selected: false
  }
  it('should get toys', () => {
    result = toysReducer([], {
      type: TOYS.GET_TOYS,
      toys: [mockToy]
    })
    expect(result).toEqual([mockToy])
  })

  it('should select toy', () => {
    result = toysReducer([mockToy], {
      type: TOYS.SELECT_TOY,
      toy: mockToy
    })
    expect(result).toEqual([{
      title: 'hello',
      icon: 'pan',
      price: 1,
      selected: true
    }])
  })

  it('should return default state', () => {
    result = toysReducer([mockToy], {type: 'toto'})
    expect(result).toEqual([mockToy])
  })
})
