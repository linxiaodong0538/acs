// import env from 'jt-env'
import MENUS from './menus'

// 基础地址
// const BASE_URL = env.isDev() ? 'http://localhost:8080' : 'http://hd.xingxiaoban.com:8080'
const BASE_URL = 'http://hd.xingxiaoban.com:8080'

// 接口地址
const API_URL = BASE_URL

// 分页大小
const PAGE_SIZE = 10

// 网站标题
const TITLE = '网站后台'

export default {
  MENUS,
  BASE_URL,
  API_URL,
  PAGE_SIZE,
  TITLE
}
