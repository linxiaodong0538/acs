import types from './types'

export default {
  [types.GET_FINANCINGS] (state, payload) {
    state.list = payload.data
  },
  [types.GET_FINANCING] (state, payload) {
    state.detail = payload.data
  }
}
