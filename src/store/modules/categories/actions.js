import types from './types'
import Model from '@/models/categories'

export default {
  getList ({ commit }, { query }) {
    return new Promise(resolve => {
      new Model().addPath('list').GET({ query }).then((res) => {
        const data = { total: 1, items: res.data[0] }

        commit(types.GET_CATEGORIES, { data })
        resolve(data)
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
