<template>
    <div class="set-topic">
        <div class="set-topic_title">
            <span>题目1</span>
            <Input placeholder="请填写题目..." style="width: 300px" />
        </div>
        <div class="set-topic_select">
           <span>
               选择A
           </span>
           <Input placeholder="请填写答案..." style="width: 300px"/>
           <span class="select-jump">跳转</span>
            <Select style="width:100px">
                <Option value="1"> 题目</Option>
                <Option value="2"> 答案</Option>
            </Select>
            <Input  class="input-last" placeholder="请填写对应编号..." style="width: 300px" />
        </div>
        <div class="set-topic_select">
           <span>
               选择B
           </span>
           <Input placeholder="请填写答案..." style="width: 300px" />
           <span class="select-jump">跳转</span>
            <Select style="width:100px">
                <Option value="1"> 题目</Option>
                <Option value="2"> 答案</Option>
            </Select>
            <Input  class="input-last" placeholder="请填写对应编号..." style="width: 300px" />
       </div>
        <div class="set-topic_select">
           <span>
               选择C
           </span>
           <Input placeholder="请填写答案..." style="width: 300px" />
           <span class="select-jump">跳转</span>
            <Select style="width:100px">
                <Option value="1"> 题目</Option>
                <Option value="2"> 答案</Option>
            </Select>
            <Input  class="input-last" placeholder="请填写对应编号..." style="width: 300px" />
       </div>
        <div class="set-topic_select">
           <span>
               选择D
           </span>
           <Input placeholder="请填写答案..." style="width: 300px" />
           <span class="select-jump">跳转</span>
            <Select style="width:100px">
                <Option value="1"> 题目</Option>
                <Option value="2"> 答案</Option>
            </Select>
            <Input  class="input-last" placeholder="请填写对应编号..." style="width: 300px" />
       </div>
       <div class="handle">
           <i>
               +
           </i>
           新增题目和答案
       </div>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="scss" scoped src="./styles/index.scss">
</style>
