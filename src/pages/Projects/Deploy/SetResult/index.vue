<template>
    <div class="set-result">
        <div class="set-result_title">
            <p>测试能否改变人生</p>
        </div>
        <div class="set-result_item" v-for=" (item, index) in test" :key="index">
            <div class="item-header">
                <span>{{item.header}}</span>
            </div>
            <Form :label-width="80" class="item-form">
                <p>
                    <Input placeholder="请输入类型标题..." style="width:500px"></Input>
                </p>
                <p class="item-form_text">
                    <Input type="textarea" style="width:500px" :autosize="{minRows: 5,maxRows: 5}" placeholder="请输入类型内容..."></Input>
                </p>
            </Form>
        </div>

        

       <div class="handle-add"  @click="addResult">
           <i> + </i>
         <span>添加结果</span>  
       </div>
      <div class="save">
           <span>保存并上架</span>
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
            id: 1, header: '类型A'
          },
          {
            id: 2, header: '类型B'
          }
        ]
      }
    },
    methods: {
      addResult () {
        return this.$store.dispatch(`${module}/post`,
          {
            id: 1,
            body: {'size': 3, 'result': [{'title': '111', 'content': '222', id: 1}]}
          }
        )
      }
    }
  }
</script>
<style lang="scss" scoped src="./styles/index.scss">
</style>
