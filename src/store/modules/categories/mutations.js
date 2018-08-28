import types from './types'

export default {
  [types.GET_CATEGORIES] (state, payload) {
    state.list = payload.data
  },
  [types.GET_CATEGORY] (state, payload) {
    state.detail = payload.data
  }
}
