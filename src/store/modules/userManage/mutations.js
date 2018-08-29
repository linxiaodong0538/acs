import types from './types'

export default {
  [types.GET_MANAGE] (state, payload) {
    state.list = payload.data
  }
}
