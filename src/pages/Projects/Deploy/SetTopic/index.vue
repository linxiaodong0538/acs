<template>
  <div class="set-topic">
    <div v-for="(item, index) in test" :key="index">
      <div class="set-topic_title">
        <span>{{item.subject}}</span>
        <Input placeholder="请填写题目..." style="width: 300px" />
      </div>
      <div class="set-topic_select" v-for="(answer, i) in item.answer" :key="i">
        <span>
          {{answer.name}}
        </span>
        <Input placeholder="请填写答案..." style="width: 300px" />
        <span class="select-jump">跳转</span>
        <Select style="width:100px">
          <Option value="1"> 题目</Option>
          <Option value="2"> 答案</Option>
        </Select>
        <Input class="input-last" placeholder="请填写对应编号..." style="width: 300px" />
      </div>
    </div>
    <div class="handle" @click="addTopic">
      <i>+</i>
      新增题目和答案
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
              subject: '题目1',
              answer: [{name: 'A'}, {name: 'B'}, {name: 'C'}, {name: 'D'}]
            }
          ]
        }
      },
      methods: {
        addTopic () {
          return this.$store.dispatch(`${module}/postTopic`,
            {
              id: 6,
              body: {subject: 'test fisrst', id: 1, size: 1, option: [{id: 0, option: 'ption 1', answerid: 0, nextquesid: 0}]}
            }
          )
        }
      }
}
</script>

<style lang="scss" scoped src="./styles/index.scss">
</style>
