import { IAppState } from '../'
import * as authQueries from './auth.queries'

describe('authQueries', () => {

  const state = {
    authReducer: {
      connected: true,
      opened: true
    },
    toysReducer: null
  }

  it('should return a connected status', () => {
    expect(authQueries.connected(state)).toBe(true)
  })

  it('should return an opened status', () => {
    expect(authQueries.opened(state)).toBe(true)
  })

})
