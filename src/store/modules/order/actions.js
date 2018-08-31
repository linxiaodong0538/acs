import types from './types'
import Model from '@/models/order'

export default {
  getList ({ commit }, { query }) {
    return new Promise(resolve => {
      new Model().addPath('list').GET({ query }).then((res) => {
        const data = {total: 1, items: res.data[0].rows}
        commit(types.GET_ORDERS, { data })
        resolve(data)
      })
    })
  }

  // getDetail ({ commit }, { id }) {
  //   return new Model().GET({ id }).then((res) => {
  //     commit(types.GET_ORDER, {data: res.data})
  //   })
  // }

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
