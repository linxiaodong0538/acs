import Model from '../../../models/managers'

export default {
  postManager ({ commit }, { query, body }) {
    return new Model().POST({ query, body })
  }
}
