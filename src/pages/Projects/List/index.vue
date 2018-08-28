<template>
  <div>
    <CList
      :columns="List.columns"
      :data="list.items"
      :page-total="list.total"
      :page-current="List.page.current"
      @on-page-change="handlePageChange">
      <CListHeader>
        <CListOperations>
          <Button
            class="margin-right-sm"
            type="primary"
            @click="$router.push('/')">
            新增
          </Button>
        </CListOperations>

        <CListSearch>
          <Form
            inline
            @submit.native.prevent="handleSearch">
            <Form-item prop="title">
              <Input
                type="text"
                placeholder="请输入标题"
                v-model="Search.where.title.$like"
                style="width: 220px;" />
            </Form-item>
            <Form-item>
              <Button
                type="primary"
                @click="handleSearch">
                查询
              </Button>
            </Form-item>
          </Form>
        </CListSearch>
      </CListHeader>
    </CList>

    <Modal
      width="280"
      v-model="Del.modal"
      title="请确认"
      @on-ok="handleDelOk">
      <p>确认删除？</p>
    </Modal>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import CList, { CListHeader, CListOperations, CListSearch } from '@/components/List'

  const module = 'projects'

  export default {
    async created () {
      this.categoriesList = await this.getCategoriesList()
      this.getList()
    },
    components: {
      CList,
      CListHeader,
      CListOperations,
      CListSearch
    },
    data () {
      return {
        categoriesList: [],
        List: {
          columns: [
            {
              title: '名称',
              key: 'title'
            },
            {
              title: '是否付费产品',
              key: 'isfree',
              render: (h, params) => {
                return h('span', null, this.consts.MAPS.PROJECTS.IS_FREE[params.row.isfree])
              }
            },
            {
              title: '实际测试量',
              key: 'usetimes'
            },
            {
              title: '状态',
              key: 'status',
              render: (h, params) => {
                return h('span', null, this.consts.MAPS.PROJECTS.STATUSES[params.row.status])
              }
            },
            {
              title: '测试类型',
              key: 'status',
              render: (h, params) => {
                const item = this.helpers.getItemById(this.categoriesList, params.row.categoryid)
                return h('span', null, item.name)
              }
            },
            {
              title: '操作',
              key: 'action',
              width: 150,
              render: (h, params) => {
                return h('ButtonGroup', [
                  h('Button', {
                    props: {
                      type: 'ghost'
                    },
                    on: {
                      click: () => {
                        this.$router.push('/')
                      }
                    }
                  }, '编辑'),
                  h('Button', {
                    props: {
                      type: 'ghost'
                    },
                    on: {
                      click: () => {
                        this.handleDel(params.row.id)
                      }
                    }
                  }, '删除')
                ])
              }
            }
          ],
          page: {
            current: 1
          }
        },
        Search: {
          where: {
            title: {
              $like: ''
            }
          }
        },
        Del: {
          id: 0,
          modal: false
        }
      }
    },
    computed: mapState({
      list: state => state[module].list
    }),
    methods: {
      async getCategoriesList () {
        const getListRes = await this.$store.dispatch('categories/getList', {
          query: { offset: 0, limit: 49 }
        })

        return getListRes.items
      },
      getList (current = 1) {
        this.List.page.current = current

        return this.$store.dispatch(`${module}/getList`, {
          query: {
            offset: (current - 1) * this.consts.PAGE_SIZE,
            limit: this.consts.PAGE_SIZE,
            where: this.Search.where
          }
        })
      },
      handleSearch () {
        this.List.page.current = 1
        this.getList()
      },
      handlePageChange (current) {
        this.getList(current)
      },
      handleDel (id) {
        this.Del.id = id
        this.Del.modal = true
      },
      async handleDelOk () {
        await this.$store.dispatch(`${module}/del`, { id: this.Del.id })
        this.$Message.success('删除成功！')
        this.getList()
      }
    }
  }
</script>
