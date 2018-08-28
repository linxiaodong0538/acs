<template>
  <Card
    class="login"
    dis-hover>
    <p slot="title">后台管理系统</p>
    <Form
      ref="formValidate"
      :model="formValidate"
      :rules="ruleValidate"
      :label-width="60"
      label-position="left">
      <Form-item
        label="账号"
        prop="telephone">
        <Input
          size="large"
          v-model="formValidate.telephone"
          placeholder="请输入账号"
          @on-enter="handleLogin" />
      </Form-item>
      <Form-item
        label="密码"
        prop="password">
        <Input
          size="large"
          type="password"
          v-model="formValidate.password"
          placeholder="请输入密码"
          @on-enter="handleLogin" />
      </Form-item>
      <Form-item>
        <Button
          size="large"
          type="primary"
          @click="handleLogin">
          登录
        </Button>
      </Form-item>
    </Form>
  </Card>
</template>

<script>
  import auth from '@/utils/auth'

  export default {
    data () {
      return {
        formValidate: {},
        ruleValidate: {
          telephone: [
            {
              required: true,
              message: '账号不能为空'
            }
          ],
          password: [
            {
              required: true,
              message: '密码不能为空'
            }
          ]
        }
      }
    },
    methods: {
      handleLogin () {
        this.$refs.formValidate.validate(async valid => {
          if (valid) {
            const { telephone, password } = this.formValidate
            const postRes = await this.$store.dispatch('managers/post', {
              body: {
                username: telephone,
                loginpw: password
              }
            })

            auth.login({ user: telephone, token: postRes.data[0].token })
            this.$Message.success('登录成功')
            this.$router.push(this.$route.query.redirect || '/')
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped src="./styles/index.scss">
</style>
