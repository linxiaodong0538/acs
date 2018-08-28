<template>
  <div>
    <CList
      :current="current"
      :columns="columns"
      :data="list.items"
      :total="list.total"
      @on-change="handlePageChange">
      <CListHeader>
        <CListOperations>
          <Button
            class="margin-right-sm"
            type="primary"
            @click="handlePost">
            新增
          </Button>
        </CListOperations>
      </CListHeader>
    </CList>
    <Modal
      width="280"
      v-model="del.modal"
      title="请确认"
      @on-ok="handleDelOk">
      <p>确认删除？</p>
    </Modal>
    <Modal
      width="500"
      v-model="modals.form"
      :title="put.id ? '编辑' : '新增'">
      <Form
        ref="formValidate"
        :model="formValidate"
        :rules="ruleValidate"
        :label-width="80">
        <Form-item
          label="名称"
          prop="name">
          <Row>
            <Col span="20">
              <Input
                v-model="formValidate.name"
                placeholder="请输入名称" />
            </Col>
          </Row>
        </Form-item>
      </Form>
      <div slot="footer">
        <Button
          type="text"
          size="large"
          @click="modals.form = false">
          取消
        </Button>
        <Button
          type="primary"
          size="large"
          @click="handleFormOk">
          确定
        </Button>
      </div>
    </Modal>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import CList, { CListHeader, CListOperations } from '@/components/List'

  export default {
    created () {
      this.getList()
    },
    components: {
      CList,
      CListHeader,
      CListOperations
    },
    data () {
      return {
        modals: {
          form: false
        },
        del: {
          id: 0,
          modal: false
        },
        put: {
          id: 0
        },
        formValidate: {},
        ruleValidate: {
          name: [
            {
              required: true,
              message: '名称不能为空'
            },
            {
              max: 100,
              message: '名称不能多于 100 个字'
            }
          ]
        },
        current: 1,
        columns: [
          {
            title: '名称',
            key: 'name'
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
                      this.handlePut(params.row)
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
        ]
      }
    },
    computed: mapState({
      list: state => state.categories.categories
    }),
    methods: {
      getList (current = 1) {
        this.current = current

        return this.$store.dispatch('categories/getList', {
          query: {
            offset: (current - 1) * this.consts.PAGE_SIZE,
            limit: 49 // this.consts.PAGE_SIZE
          }
        })
      },
      handlePageChange (current) {
        this.getList(current)
      },
      handlePost () {
        this.modals.form = true
        this.put.id = 0
        this.resetFields()
      },
      handlePut (detail) {
        this.put.id = detail.id
        this.$set(this, 'formValidate', { name: detail.name })
        this.modals.form = true
      },
      handleDel (id) {
        this.del.modal = true
        this.del.id = id
      },
      async handleDelOk () {
        await this.$store.dispatch('categories/del', {
          id: this.del.id
        })
        this.$Message.success('删除成功！')
        // iView.Spin 的坑，调用 iView.Spin.hide()，500ms 后实例才被销毁
        // await helpers.sleep(500)
        this.getList()
      },
      handleFormOk () {
        this.$refs.formValidate.validate(async valid => {
          if (valid) {
            await this.$store.dispatch(this.put.id ? 'categories/put' : 'categories/post', {
              id: this.put.id || '0',
              body: { name: this.formValidate.name }
            })

            this.modals.form = false

            this.$Message.success((this.put.id ? '编辑' : '新增') + '成功！')
            !this.put.id && this.resetFields()
            this.getList()
          }
        })
      },
      resetFields () {
        this.$refs.formValidate.resetFields()
        this.$set(this, 'formValidate', {})
      }
    }
  }
</script>
