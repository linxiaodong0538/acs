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
            @click="handlePost">
            新增
          </Button>
        </CListOperations>
      </CListHeader>
    </CList>

    <Modal
      width="280"
      v-model="Del.modal"
      title="请确认"
      @on-ok="handleDelOk">
      <p>确认删除？</p>
    </Modal>

    <Modal
      width="400"
      v-model="Form.modal"
      :title="Form.id ? '编辑' : '新增'">
      <Form
        ref="formValidate"
        :model="Form.formValidate"
        :rules="Form.ruleValidate"
        :label-width="80">
        <Form-item
          label="名称"
          prop="name">
          <Row>
            <Col span="20">
              <Input
                v-model="Form.formValidate.name"
                placeholder="请输入名称" />
            </Col>
          </Row>
        </Form-item>
      </Form>
      <div slot="footer">
        <Button
          type="text"
          size="large"
          @click="Form.modal = false">
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

const module = 'categories'

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
      List: {
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
                h(
                  'Button',
                  {
                    props: {
                      type: 'ghost'
                    },
                    on: {
                      click: () => {
                        this.handlePut(params.row)
                      }
                    }
                  },
                  '编辑'
                ),
                h(
                  'Button',
                  {
                    props: {
                      type: 'ghost'
                    },
                    on: {
                      click: () => {
                        this.handleDel(params.row.id)
                      }
                    }
                  },
                  '删除'
                )
              ])
            }
          }
        ],
        page: {
          current: 1
        }
      },
      Del: {
        id: 0,
        modal: false
      },
      Form: {
        id: 0,
        modal: false,
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
        }
      }
    }
  },
  computed: mapState({
    list: state => state[module].list
  }),
  methods: {
    getList (current = 1) {
      this.List.page.current = current

      return this.$store.dispatch(`${module}/getList`, {
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
      this.Form.modal = true
      this.Form.id = 0
      this.resetFields()
    },
    handlePut (detail) {
      this.Form.id = detail.id
      console.log(this)

      this.$set(this.Form, 'formValidate', { name: detail.name })
      this.Form.modal = true
    },
    handleDel (id) {
      this.Del.id = id
      this.Del.modal = true
    },
    async handleDelOk () {
      await this.$store.dispatch(`${module}/del`, { id: this.Del.id })
      this.$Message.success('删除成功！')
      this.getList()
    },
    handleFormOk () {
      this.$refs.formValidate.validate(async valid => {
        if (valid) {
          await this.$store.dispatch(
            this.Form.id ? `${module}/put` : `${module}/post`,
            {
              id: this.Form.id || '0',
              body: { name: this.Form.formValidate.name }
            }
          )

          this.Form.modal = false
          this.$Message.success((this.Form.id ? '编辑' : '新增') + '成功！')
          !this.Form.id && this.resetFields()
          this.getList()
        }
      })
    },
    resetFields () {
      this.$refs.formValidate.resetFields()
      this.$set(this.Form, 'formValidate', {})
    }
  }
}
</script>
<style>
</style>

