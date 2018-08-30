import types from './types'

export default {
  [types.GET_MANAGES] (state, payload) {
    state.list = payload.data
  }
}
