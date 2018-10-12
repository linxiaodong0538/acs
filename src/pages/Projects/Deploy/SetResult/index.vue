<template>
  <div>
    <div class="set-result">
      <div class="set-result_title">
        <p>测试能否改变人生</p>
      </div>
      <div class="set-result_item" v-for=" (item, index) in test" :key="index">
        <div class="item-header">
          <span>类型{{index + 1}}</span>
        </div>
        <Form :label-width="80" class="item-form">
          <p>
            <Input placeholder="请输入类型标题..." v-model="item.title" style="width:500px"></Input>
          </p>
          <p class="item-form_text">
            <Input type="textarea" style="width:500px" v-model="item.content" :autosize="{minRows: 5,maxRows: 5}" placeholder="请输入类型内容..."></Input>
          </p>
        </Form>
        <div class="delete" @click="handleDel(index)">
          <i> - </i>
          <span>删除结果</span>
        </div>
      </div>
      <div class="save" @click="handleSave">
        <span>保存并上架</span>
      </div>
      <div class="handle-add" @click="addRes">
        <i> + </i>
        <span>添加结果</span>
      </div>
    </div>

  </div>
</template>
<script>
  const module = 'projects'
  export default {
    data () {
      return {
        test: [
          {
            id: 1, title: '', content: ''
          },
          {
            id: 2, title: '', content: ''
          },
          {
            id: 3, title: '', content: ''
          }
        ]
      }
    },
    methods: {
      handleSave () {
        return this.$store.dispatch(`${module}/postRes`,
          {
            id: 1,
            body: {
              size: this.test.length,
              result: this.test
            }
          }
        )
      },
      addRes () {
        this.test.push({
          id: this.test.length + 1,
          title: '',
          content: ''
        })
      },
      handleDel (index) {
        if (this.test.length > 3) {
          this.test.splice(index, 1)
        } else {
          this.$Message.warning('该项目已经有销售记录,不允许删除!')
        }
      }
    }
  }
</script>
<style lang="scss" scoped src="./styles/index.scss">
</style>
