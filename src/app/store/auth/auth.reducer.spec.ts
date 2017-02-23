/*
 * Testing authReducer
 */

import { authReducer } from './auth.reducer'
import { AUTH } from './auth.actions'

describe('authReducer', () => {

  let result
  const closedState = {
    opened: false,
    connected: false
  }
  const openedState = {
    opened: true,
    connected: false
  }
  it('shoud be opened', () => {
    result = authReducer(closedState, {
      type: AUTH.OPEN
    })
    expect(result).toEqual(openedState)
  })

  it('should be closed', () => {
    result = authReducer(openedState, {
      type: AUTH.CLOSE
    })
    expect(result).toEqual(closedState)
  })

  it('should be connected', () => {
    result = authReducer(openedState, {
      type: AUTH.CONNECTED
    })
    expect(result).toEqual({
      opened: true,
      connected: true
    })
  })
})
