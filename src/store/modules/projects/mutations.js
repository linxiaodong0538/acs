import types from './types'

export default {
  [types.GET_PROJECTS] (state, payload) {
    state.list = payload.data
  },
  [types.GET_PROJECT] (state, payload) {
    state.detail = payload.data
  }
}
