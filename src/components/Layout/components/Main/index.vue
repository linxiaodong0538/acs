<template>
  <div class="main">
    <TheHeader />
    <div class="body">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>
<script>
import TheHeader from './components/Header'

export default {
  name: 'TheMain',
  components: {
    TheHeader
  }
}
</script>

<style lang="scss" scoped src="./styles/index.scss">
</style>
