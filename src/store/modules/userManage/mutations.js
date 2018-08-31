import types from './types'

export default {
  [types.GET_MANAGES] (state, payload) {
    state.list = payload.data
  },
  [types.GET_MANAGE] (state, payload) {
    state.detail = payload.data
  }
}
