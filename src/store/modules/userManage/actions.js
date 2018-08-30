import types from './types'
import Model from '@/models/userManage'

export default {
  getList ({ commit }, { query }) {
    return new Promise(resolve => {
      new Model().addPath('list').GET({ query }).then((res) => {
        const data = { total: 1, items: res.data[0] }
        commit(types.GET_MANAGES, { data })
        resolve(data)
      })
    })
  }
}
