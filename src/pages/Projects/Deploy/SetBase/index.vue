<template>
  <div class="set-base">
    <Form :label-width="110" class="form" :model="formValidate" ref="formValidate" :rules="ruleValidate">
      <FormItem label="测试标题" prop="title">
        <Input v-model="formValidate.title" placeholder="测试..." style="width:300px"></Input>
      </FormItem>
      <FormItem label="测试副标题" prop="subtitle">
        <Input placeholder="测试..." v-model="formValidate.subtitle" style="width:300px"></Input>
      </FormItem>
      <FormItem label="测试类型" prop="categoryid" style="width:300px">
        <Select v-model="formValidate.categoryid">
          <Option value="1">情感</Option>
          <Option value="2">测试</Option>
          <Option value="3">三生三世十里桃花</Option>
        </Select>
      </FormItem>
      <FormItem label="参与测试人数" prop="usetimes">
        <Input v-model="formValidate.usetimes" placeholder="测试..." style="width:200px"></Input>
      </FormItem>
      <div class="offset-wrap clearfix">
        <FormItem label="是否付费测试" prop="isfree" class="offset-wrap_item">
          <RadioGroup v-model="formValidate.isfree">
            <Radio label="1">是</Radio>
            <Radio label="0">否</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="价格" prop="amount" class="offset-wrap_item">
          <Select v-model="formValidate.amount">
            <Option value="99.9">99.9</Option>
            <Option value="55.5">55.5</Option>
          </Select>
        </FormItem>
      </div>
      <div class="recommend">
        <span class="ivu-form-item">推荐</span>
        <FormItem label="推荐到banner" prop="isbaner">
          <i-switch v-model="formValidate.isbanner" :false-value="Number(0)" :true-value="Number(1)"></i-switch>
        </FormItem>
        <FormItem label="推荐到热门" prop="ishot">
          <i-switch v-model="formValidate.ishot" :false-value="Number(0)" :true-value="Number(1)"></i-switch>
        </FormItem>
        <FormItem label="推荐到好友都在测" prop="isfriend">
          <i-switch v-model="formValidate.isfriend" :false-value="Number(0)" :true-value="Number(1)"></i-switch>
        </FormItem>
      </div>
      <div class="person-card clearfix">
        <FormItem label="是否支持好人卡" prop="isinvite">
          <RadioGroup v-model="formValidate.isinvite">
            <Radio label=1>是</Radio>
            <Radio label=0>否</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="数量" style="width:200px" prop="invites">
          <Select v-model="formValidate.invites">
            <Option value="10">10</Option>
            <Option value="20">20</Option>
          </Select>
        </FormItem>
      </div>
      <FormItem prop="description" label="测试说明：">
        <Input type="textarea" :autosize="{minRows: 5,maxRows: 7}" v-model="formValidate.description" placeholder="Enter something..." style="width:600px"></Input>
      </FormItem>
      <FormItem prop="remark" label="测试需知：">
        <Input type="textarea" :autosize="{minRows: 5,maxRows: 7}" v-model="formValidate.remark" placeholder="Enter something..." style="width:600px"></Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
        <Button @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
    const module = 'projects'
    export default {
      created () {},
      data () {
        return {
          formValidate: {
            title: '',
            subtitle: '',
            categoryid: '',
            usetimes: '',
            isfree: '',
            amount: '',
            isbanner: false,
            ishot: false,
            isfriend: false,
            isinvite: '',
            invites: null,
            description: '',
            remark: ''
          },
          ruleValidate: {
            title: [
              {required: true, message: '标题不能为空', trigger: 'blur'}
            ],
            subtitle: [
              {required: true, message: '副标题不能为空', trigger: 'blur'}
            ],
            categoryid: [
              {required: true, message: '测试类型不能为空', trigger: 'change'}
            ]
          }
        }
      },
      methods: {
        sendData () {
          this.formValidate.categoryid = Number(this.formValidate.categoryid)
          this.formValidate.isfree = Number(this.formValidate.isfree)
          this.formValidate.usetimes = Number(this.formValidate.usetimes)
          this.formValidate.isinvite = Number(this.formValidate.isinvite)
          this.formValidate.invites = Number(this.formValidate.invites)
          return this.$store.dispatch(`${module}/post`,
            {
              id: 1,
              body: this.formValidate
            }
          )
        },
        handleSubmit (name) {
          this.$refs[name].validate((valid) => {
            if (valid) {
              this.sendData()
              this.$Message.success('提交成功!')
              this.$refs[name].resetFields()
            }
          })
        },
        handleReset (name) {
          console.log(1, this.$refs[name])
          this.$refs[name].resetFields()
        }
      }
    }
</script>

<style lang="scss" scoped src="./styles/index.scss">
</style>

