<template>
<div>

     <CListHeader>用户详细</CListHeader>
      <table>
          <tbody>
            <tr><td >用户昵称</td><td >{{users[0].age}}</td> <td >用户头像</td><td ><img :src='users[0].img' alt=""></td> </tr>
            <tr><td >用户昵称</td><td >{{users[0].age}}</td> <td >用户头像</td><td >{{users[0].test1}}</td> </tr>
            <tr><td >用户昵称</td><td >{{users[0].age}}</td> <td >用户头像</td><td >{{users[0].test1}}</td> </tr>
            <tr><td >用户昵称</td><td >{{users[0].age}}</td> <td >用户头像</td><td >{{users[0].test1}}</td> </tr>
            <tr><td >用户昵称</td><td >{{users[0].age}}</td> <td >用户头像</td><td >{{users[0].test1}}</td> </tr>
            <tr><td >用户昵称</td><td >{{users[0].age}}</td> <td >用户头像</td><td >{{users[0].test1}}</td> </tr>
            <tr><td >用户昵称</td><td colspan="3">{{users[0].age}}</td></tr>
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
    return {
      users: [
        {
          name: '李磊',
          age: '25',
          school: '洛阳理工',
          aa: '12',
          xb: '男',
          iphone: '11111',
          test1: '测试',
          test2: '测试1',
          test3: '测试2',
          test4: '测试3',
          test5: '测试4',
          test6: '测试5',
          img: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKqJ9k8UI3xCuJiacgNb1ibYj7OS8JMMYqswYAKrL3K6bVUZHgvNHp6vmp5CsgDB36E3mrxwjm8nWow/132'
        }
      ]
    }
  },
  created () {
    this.getDetail()
  },
  computed: {
    ...mapState({
      list: state => state[module].list
    })
  },
  methods: {
    // getList (current = 1) {
    //   // this.List.page.current = current
    //   return this.$store.dispatch(`${module}/getList`, {
    //     query: {
    //       offset: (current - 1) * this.consts.PAGE_SIZE,
    //       limit: 49
    //     }
    //   })
    // },
    getDetail () {
      return this.$store.dispatch(`${module}/getDetail`, { id: 1 })
    }
  },
  mounted () {}
}
</script>


<style lang="scss" scoped src="./styles/index.scss">
</style>



