<template>
<div>
    <CList :columns='columns' :data='list.items'>
        <CListHeader>用户管理</CListHeader>
        <Row>
          <Col span="24">
            <Input placeholder="请输入搜索关键词" style="width: 200px" />
            <Button type="primary">搜索</Button>
                <Select style="width:120px" class="select-offset">
                  <Option value='付费用户'>付费用户</Option>
                  <Option value='非付用户'>非付用户</Option>
                  <Option value='女性用户'>女性用户</Option>
                  <Option value='男性用户'>男性用户</Option>
                </Select>
                <Select style="width:120px">
                  <Option value='1' >xxx</Option>
                </Select>
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
      columns: [
        {
          title: '用户头像',
          key: 'avatar',
          align: 'center',
          render: (h, params) => {
            return h('img', {
              attrs: {
                src: params.row.avatar,
                style:
                  'width: 35px;height: 35px;border-radius: 2px;vertical-align: middle;'
              }
            })
          }
        },
        {
          title: '用户昵称',
          key: 'nickname'
        },
        {
          title: '是否付费用户',
          key: 'address'
        },
        {
          title: '使用次数',
          key: 'name'
        },
        {
          title: '用户手机号',
          key: 'phone'
        },
        {
          title: '性别',
          key: 'gender',
          render: (h, params) => {
            return h(
              'span',
              this.consts.MAPS.USERMANAGE.GENDER[params.row.gender]
            )
          }
        },
        {
          title: '操作',
          key: 'address',
          align: 'center',
          render: (h, params) => {
            return h(
              'span',
              {
                attrs: {
                  style: 'color:#5666BE; cursor:pointer'
                },
                on: {
                  click: () => {
                    this.$router.push('/userManage/detail')
                  }
                }
              },
              '查看'
            )
          }
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
      return this.$store.dispatch(`${module}/getList`, {
        query: {
          offset: (current - 1) * this.consts.PAGE_SIZE,
          limit: 49
        }
      })
    },
    handlePageChange () {}
  },
  mounted () {}
}
</script>

<style lang="scss" scoped src="./styles/index.scss">
</style>



