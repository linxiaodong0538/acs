import types from './types'
import Model from '@/models/projects'

export default {
  getList ({ commit }, { query }) {
    return new Promise(resolve => {
      new Model().addPath('list').GET({ query }).then((res) => {
        const data = { total: res.data[0].count, items: res.data[0].rows }
        commit(types.GET_PROJECTS, { data })
        resolve(data)
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
  postRes ({ commit }, { id, body }) {
    return new Model().addPath('result').POST({ id, body })
  },
  postTopic ({ commit }, { id, body }) {
    return new Model().addPath('question').POST({ id, body })
  },

  put ({ commit }, { id, body }) {
    return new Model().POST({ id, body })
  },

  del ({ commit }, { id }) {
    return new Model().DELETE({ id })
  }
}
