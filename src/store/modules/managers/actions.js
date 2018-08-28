import Model from '../../../models/managers'

export default {
  post ({ commit }, { body }) {
    return new Model().POST({ body })
  }
}
