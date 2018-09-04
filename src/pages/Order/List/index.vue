<template>
  <div>
     <CList :columns="columns1" :data="list.items" :total="list.total" :current="page.current" @on-page-change="handlePageChange">
          <CListHeader>订单管理</CListHeader>
          <Row>
            <Col span="24">
              <CListSearch>
                <Input placeholder="订单号/类型/名称/用户名/手机号"  style="width: 220px" />
                <Button type="primary">搜索</Button>
                <DatePicker type="daterange" split-panels placeholder="请选择日期" style="width: 200px"></DatePicker>
              </CListSearch>  
            </Col>
        </Row>
        <Modal
        width="500"
        v-model="modal" title='订单明细'>
        <p>订单号：{{detail.sn}}</p>
        <p>类型： {{consts.MAPS.ORDER.OPTYPE[detail.optype]}}</p>
        <p>测试名称：{{detail.userid}}</p>
        <p>时间：{{detail.usetime}}</p>
        <p>金额：{{detail.amount}}</p>
        <p>用户名：{{detail.userid}}</p>
        <p>手机号：{{detail.name}}</p>
        <p>状态：{{consts.MAPS.ORDER.STATUS[detail.status]}}</p>
        <div slot="footer"></div>
      </Modal>
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
      modal: false,
      detail: {},
      columns1: [
        {
          title: '订单号',
          key: 'sn'
        },
        {
          title: '类型',
          key: 'optype',
          render: (h, params) => {
            return h('span', this.consts.MAPS.ORDER.OPTYPE[params.row.optype])
          }
        },
        {
          title: '测试名称',
          key: 'userid'
        },
        {
          title: '时间',
          key: 'usetime'
        },
        {
          title: '金额',
          key: 'amount'
        },
        {
          title: '用户名',
          key: 'userid'
        },
        {
          title: '手机号',
          key: 'name'
        },
        {
          title: '状态',
          key: 'status',
          render: (h, params) => {
            return h('span', this.consts.MAPS.ORDER.STATUS[params.row.status])
          }
        },
        {
          title: '操作',
          key: 'phone',
          align: 'center',
          render: (h, params) => {
            return h(
              'Button',
              {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.handleDetail(params.index)
                  }
                }
              },
              '查看明细'
            )
          }
        }
      ],
      page: {
        current: 1
      }
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
      this.page.current = current
      return this.$store.dispatch(`${module}/getList`, {
        query: {
          offset: (current - 1) * this.consts.PAGE_SIZE,
          limit: this.consts.PAGE_SIZE
        }
      })
    },
    handleDetail (index) {
      this.detail = this.list.items[index]
      this.modal = true
    },
    handlePageChange (current) {
      this.getList(current)
    }
  },

  mounted () {}
}
</script>

<style lang="scss" scoped src="./styles/index.scss">

</style>



