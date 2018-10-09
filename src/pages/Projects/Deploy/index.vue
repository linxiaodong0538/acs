<template>
    <div>
        <div class="nav">
            <div class="tab-item">
                <router-link to="/projects/deploy/base">基础信息配置</router-link>
            </div>
            <div class="tab-item">
                <router-link to="/projects/deploy/result">结果配置</router-link>
            </div>
            <div class="tab-item">
                <router-link to="/projects/deploy/topic">题目配置</router-link>
            </div>
        </div>
        <router-view></router-view>
    </div>

</template>

<script>
    export default {}
</script>

<style lang="scss" scoped src="./styles/index.scss">
</style>



