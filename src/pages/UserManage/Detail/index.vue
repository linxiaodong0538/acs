<template>
<div>

     <CListHeader>用户详细</CListHeader>
      <table>
          <tbody>
            <tr v-for ='(user,index) in users' :key='index'>
              <td >{{user.name}}</td>
               <td >{{user.age}}</td>
                <td >{{user.school}}</td>
            </tr>
          </tbody>
      </table>
</div>
   
</template>
    <script>
import { mapState } from 'vuex'
import CList, {
  CListHeader,
  CListOperations,
  CListSearch,
  CListNavigation
} from '@/components/List'

const module = 'userManage'

export default {
  components: {
    CList,
    CListHeader,
    CListOperations,
    CListSearch,
    CListNavigation
  },
  data () {
    return {
      users: [
        { name: '李磊', age: '25', school: '洛阳理工' },
        { name: '张成', age: '23', school: '桂林电子科技' },
        { name: '炼心', age: '22', school: '江西电子科技' },
        { name: '炼心' }
      ]
    }
  },
  created () {
    this.getList()
  },
  computed: mapState({
    list: state => state[module].list
  }),
  methods: {
    getList (current = 1) {
      // this.List.page.current = current
      return this.$store.dispatch(`${module}/getList`, {
        query: {
          offset: (current - 1) * this.consts.PAGE_SIZE,
          limit: 49
        }
      })
    },
    handlePageChange () {}
  },
  mounted () {
    console.log()
  }
}
</script>

<style>
.header {
  background: #f8f8f9;
  line-height: 48px;
  padding-left: 10px;
}
.ivu-table-wrapper {
  margin-top: 50px;
}
table,
table tr th,
table tr td {
  border: 1px solid #cdcdcd;
}
table {
  width: 600px;
  min-height: 250px;
  line-height: 25px;
  text-align: center;
  border-collapse: collapse;
}
</style>



