<template>
<div>

     <CListHeader>用户详细</CListHeader>
      <table>
          <tbody>
            <tr><td >用户昵称</td><td >{{detail.nickname}}</td> <td >用户头像</td><td ><img :src='detail.avatar' alt=""></td> </tr>
            <tr><td >性别</td><td >{{detail.gender}}</td> <td >测试完成次数</td><td >{{detail.usetimes}}</td> </tr>
            <tr><td >加入时间</td><td >{{detail.regtime | fromDate}}</td> <td >分享次数</td><td >{{detail.sharetimes}}</td> </tr>
            <tr><td >手机号</td><td >{{detail.phone}}</td> <td >付费次数</td><td >{{detail.paytimes}}</td> </tr>
            <tr><td >赠送次数</td><td ></td> <td >接受赠送次数</td><td ></td></tr>
            <tr><td >最后一次打开时间</td><td >{{detail.lasttime | fromDate}}</td> <td ></td><td ></td></tr>
            <tr><td >参与的测试主题</td><td colspan="3"></td></tr>
          </tbody>
      </table>
</div>
</template>
    <script>
import { mapState } from 'vuex'
import CList, { CListHeader } from '@/components/List'

const module = 'userManage'

export default {
  components: {
    CList,
    CListHeader
  },
  data () {
    return {}
  },
  created () {
    this.getDetail()
  },
  activated () {
    this.getDetail()
  },
  computed: {
    ...mapState({
      detail: state => state[module].detail
    })
  },
  methods: {
    getDetail () {
      let userid = Number(this.$route.query.id)
      return this.$store.dispatch(`${module}/getDetail`, { id: userid })
    }
  },
  filters: {
    fromDate: value => {
      return new Date(parseInt(value) * 1000).toLocaleString().replace(/:\d{1,2}$/, ' ')
    }
  },
  mounted () {}
}
</script>


<style lang="scss" scoped src="./styles/index.scss">
</style>



