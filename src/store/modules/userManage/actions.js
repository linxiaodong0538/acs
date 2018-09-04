import types from './types'
import Model from '@/models/userManage'

export default {
  getList ({ commit }, { query }) {
    return new Promise(resolve => {
      new Model().addPath('list').GET({ query }).then((res) => {
        const data = { total: res.data[0].length, items: res.data[0] }
        commit(types.GET_MANAGES, { data })
        resolve(data)
      })
    })
  },

  getDetail ({ commit }, { id }) {
    return new Model().GET({ id }).then((res) => {
      commit(types.GET_MANAGE, {data: res.data[0].user})
    })
  }

  // post ({ commit }, { id, body }) {
  //   return new Model().POST({ id, body })
  // },

  // put ({ commit }, { id, body }) {
  //   return new Model().POST({ id, body })
  // },

  // del ({ commit }, { id }) {
  //   return new Model().DELETE({ id })
  // }
}
