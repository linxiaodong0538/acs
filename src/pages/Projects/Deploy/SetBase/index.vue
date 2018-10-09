<template>
    <div class="set-base">
        <Form :label-width="110" class="form">
            <FormItem label="测试标题">
                <Input  placeholder="测试..." style="width:300px"></Input>
            </FormItem>
            <FormItem label="测试副标题">
                <Input  placeholder="测试..." style="width:300px"></Input>
            </FormItem>
            <FormItem label="测试类型" style="width:300px">
                <Select>
                    <Option value="beijing">情感</Option>
                    <Option value="shanghai">测试</Option>
                    <Option value="shenzhen">三生三世十里桃花</Option>
                </Select>
            </FormItem>
            <FormItem label="参与测试人数">
                <Input  placeholder="测试..." style="width:200px"></Input>
            </FormItem>
            <div class="offset-wrap clearfix">
                <FormItem label="是否付费测试" class="offset-wrap_item">
                    <Radio></Radio>
                </FormItem>
                <FormItem label="价格" class="offset-wrap_item">
                    <Select>
                        <Option value="beijing">99.9</Option>
                        <Option value="shanghai">55.5</Option>
                    </Select>
                </FormItem>
            </div>
            <div class="recommend">
                <span class="ivu-form-item">推荐</span>
                <FormItem label="推荐到banner">
                    <i-switch></i-switch>
                </FormItem>
                <FormItem label="推荐到热门">
                    <i-switch></i-switch>
                </FormItem>
                <FormItem label="推荐到好友都在测">
                    <i-switch ></i-switch >
                </FormItem>
            </div>
            <div class="person-card clearfix">
                <FormItem label="是否支持好人卡">
                    <Radio></Radio>
                </FormItem>
                <FormItem label="数量" style="width:200px">
                    <Select>
                        <Option value="beijing">2</Option>
                        <Option value="shanghai">55.5</Option>
                    </Select>
                </FormItem>
            </div>
            <FormItem label="测试说明：">
                <Input type="textarea" :autosize="{minRows: 5,maxRows: 7}" placeholder="Enter something..." style="width:600px"></Input>
            </FormItem>
            <FormItem label="测试需知：">
                <Input type="textarea" :autosize="{minRows: 5,maxRows: 7}" placeholder="Enter something..." style="width:600px"></Input>
            </FormItem>
        </Form>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="scss" scoped src="./styles/index.scss">
</style>

