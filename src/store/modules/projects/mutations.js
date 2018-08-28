import types from './types'

export default {
  [types.GET_PROJECTS] (state, payload) {
    state.projects = payload.data
  },
  [types.GET_PROJECT] (state, payload) {
    state.project = payload.data
  }
}
