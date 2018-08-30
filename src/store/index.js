import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

import managers from './modules/managers'
import categories from './modules/categories'
import projects from './modules/projects'
import userManage from './modules/userManage'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    language: 'zh-CN'
  },
  getters,
  actions,
  mutations,
  modules: {
    managers,
    categories,
    projects,
    userManage
  }
})
