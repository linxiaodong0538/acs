<template>
<div>
   <CList :columns="columns1" :data="list.items">
        <CListHeader>订单管理</CListHeader>
        <Row>
          <Col span="24">
            <Input placeholder="订单号/类型/名称/用户名/手机号"  style="width: 220px" />
            <Button type="primary">搜索</Button>
            <DatePicker type="daterange" split-panels placeholder="请选择日期" style="width: 200px"></DatePicker>
          </Col>
      </Row>
      </CList>
      
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

const module = 'order'

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
      columns1: [
        {
          title: '订单号',
          key: 'id'
        },
        {
          title: '类型',
          key: 'optype'
        },
        {
          title: '测试名称',
          key: 'name'
        },
        {
          title: '时间',
          key: 'phone'
        },
        {
          title: '金额',
          key: 'nickname'
        },
        {
          title: '用户名',
          key: 'address'
        },
        {
          title: '手机号',
          key: 'name'
        },
        {
          title: '状态',
          key: 'phone'
        },
        {
          title: '操作',
          key: 'phone'
        }
      ]
    }
  },
  created () {
    this.getList()
  },
  // computed: mapState({
  //   list: state => state[module].list
  // }),
  computed: {
    ...mapState({
      list: state => state[module].list
    })
  },

  methods: {
    getList (current = 1) {
      // this.List.page.current = current
      return this.$store.dispatch(`${module}/getList`, {})
    },
    handlePageChange () {}
  },
  mounted () {}
}
</script>

<style lang="scss" scoped src="./styles/index.scss">
</style>



