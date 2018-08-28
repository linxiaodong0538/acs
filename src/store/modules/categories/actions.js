import types from './types'
import Model from '../../../models/categories'

export default {
  getList ({ commit }, { query }) {
    return new Model().GET({ query }).then((res) => {
      commit(types.GET_CATEGORIES, {
        data: res.data
      })
    })
  },

  getDetail ({ commit }, { id }) {
    return new Model().GET({ id }).then((res) => {
      commit(types.GET_CATEGORY, {
        data: res.data
      })
    })
  },

  post ({ commit }, { body }) {
    return new Model().POST({ body })
  },

  put ({ commit }, { id, body }) {
    return new Model().PUT({ id, body })
  },

  del ({ commit }, { id }) {
    return new Model().DELETE({ id })
  }
}
