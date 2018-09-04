<template>
<div>
    <CList :columns='columns' :data='list.items' :total="list.total" :current="page.current" @on-page-change="handlePageChange">
        <CListHeader>用户管理</CListHeader>
        <CListSearch>
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
        </CListSearch>  
    </CList>  
</div>
</template>
<script>
import { mapState } from 'vuex'
import CList, { CListHeader, CListSearch } from '@/components/List'

const module = 'userManage'

export default {
  components: {
    CList,
    CListHeader,
    CListSearch
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
          key: 'usetimes'
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
              'Button',
              {
                props: {
                  type: 'primary',
                  size: 'small'
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
    handlePageChange (current) {
      this.getList(current)
    }
  },
  mounted () {}
}
</script>

<style lang="scss" scoped src="./styles/index.scss">
</style>



