import types from './types'
import Model from '@/models/projects'

export default {
  getList ({ commit }, { query }) {
    return new Model().addPath('list').GET({ query }).then((res) => {
      commit(types.GET_PROJECTS, {
        data: { total: 1, items: res.data[0] }
      })
    })
  },

  getDetail ({ commit }, { id }) {
    return new Model().GET({ id }).then((res) => {
      commit(types.GET_PROJECT, {
        data: res.data
      })
    })
  },

  post ({ commit }, { id, body }) {
    return new Model().POST({ id, body })
  },

  put ({ commit }, { id, body }) {
    return new Model().POST({ id, body })
  },

  del ({ commit }, { id }) {
    return new Model().DELETE({ id })
  }
}
