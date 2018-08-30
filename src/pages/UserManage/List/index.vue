<template>
<div>
    <Row>
        <i-Col span="24" class="header">用户详细</i-Col>
    </Row>
      <Row>
        <i-Col span="16"> 
            <Table border :columns="columns1" ></Table>
        </i-Col>
    </Row>
    
   
    </div>
   
</template>
    <script>
    import { mapState } from 'vuex'

const module = 'userManage'

export default {
  data () {
        return {
          columns1: [
            {
              title: '用户昵称',
              key: 'name'
            },
            {
              title: 'xxxx',
              key: 'age'
            },
            {
              title: '用户头像',
              key: 'address'
            },
            {
              title: '照片',
              key: 'address'
            }
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
          this.List.page.current = current
          return this.$store.dispatch(`${module}/getList`, {
            query: {}
          })
        }
  },
  mounted () {
    
  }
}
</script>

<style>
.header {
  background: #f8f8f9;
  padding: 12px;
}
.ivu-table-wrapper {
  margin-top: 50px;
}
</style>



