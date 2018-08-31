import types from './types'

export default {
  [types.GET_ORDERS] (state, payload) {
    state.list = payload.data
  },
  [types.GET_ORDER] (state, payload) {
    state.detail = payload.data
  }
}
