<template>
  <div>
    <CListHeader>财务管理</CListHeader>
    <CList :columns=columns1 :data="list.items" :total="list.total" :current="page.current" @on-page-change="handlePageChange">
      <Row>
        <Col span="4">
        <Card>
          <div>
            <p>今日流水</p>
            <h3>5888</h3>
          </div>
        </Card>
        </Col>
        <Col span="4" offset="2">
        <Card>
          <div>
            <p>昨日流水</p>
            <h3>5888</h3>
          </div>
        </Card>
        </Col>
        <Col span="4" offset="2">
        <Card>
          <div>
            <p>七日流水</p>
            <h3>5888</h3>
          </div>
        </Card>
        </Col>
      </Row>
      <CListSearch>
        <Input placeholder="订单号/类型/名称/用户名/手机号" style="width: 220px" />
        <Button type="primary">搜索</Button>
        <Select style="width:120px" class="select-offset">
          <Option value="测试1">测试1</Option>
          <Option value="测试2">测试2</Option>
          <Option value="测试3">测试3</Option>
          <Option value="测试4">测试4</Option>
        </Select>
        <DatePicker type="daterange" split-panels placeholder="请选择日期" style="width: 200px" @on-change="getDate"></DatePicker>
      </CListSearch>
      <p class="date-style"> {{showDate | filteredData}} </p>
    </CList>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import CList, {
  CListHeader,
  CListOperations,
  CListSearch
} from '@/components/List'

const module = 'financing'

export default {
  components: {
    CList,
    CListHeader,
    CListOperations,
    CListSearch
  },
  data () {
    return {
      showDate: [],
      columns1: [
        {
          title: '订单号',
          key: 'sn'
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
          title: '状态',
          key: 'status',
          render: (h, params) => {
            return h('span', this.consts.MAPS.ORDER.STATUS[params.row.status])
          }
        },
        {
          title: '测试名称',
          key: 'userid'
        },
        {
          title: '操作',
          key: '',
          align: 'center',
          width: 200,
          render: (h, params) => {
            return h(
              'Button',
              {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                on: {
                  click: () => {}
                }
              },
              '退款'
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
    getDate (value) {
      this.showDate = value
    },
    handlePageChange (current) {
      this.getList(current)
    }
  },
  filters: {
    filteredData: value => {
      return value.join('--')
    }
  },
  mounted () {}
}
</script>

<style lang="scss" scoped src="./styles/index.scss">
</style>



